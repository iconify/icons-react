import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.fo5gzql_k {
  d: path("M4 14V4C4 2.8954 4.8954 2 6 2H18C19.1046 2 20 2.8954 20 4M9 18H4C2.8954 18 2 17.1046 2 16V14.5C2 14.2239 2.2239 14 2.5 14H9M22 19V13C22 11.3431 20.6569 10 19 10H16C14.3431 10 13 11.3431 13 13V19C13 20.6569 14.3431 22 16 22H19C20.6569 22 22 20.6569 22 19ZM17 14H18");
}

.ls35lps-u {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-4, 0.4);
  d: path("M23 19V13C23 10.7909 21.2091 9 19 9H16C13.7909 9 12 10.7909 12 13V19C12 21.2091 13.7909 23 16 23H19C21.2091 23 23 21.2091 23 19Z");
  stroke: none;
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}
</style><g class="nrj6p8qat"><path class="ls35lps-u"/><path class="fo5gzql_k"/></g>`,
		"fallback": "keyline-icons:laptop-smartphone-two-tone",
	});
}

export default Component;
