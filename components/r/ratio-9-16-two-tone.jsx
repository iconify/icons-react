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
		"content": `<style>.kmm1aob7z {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-4, 0.4);
  d: path("M5 5C5 2.7909 6.7909 1 9 1L15 1C17.2091 1 19 2.7909 19 5L19 19C19 21.2091 17.2091 23 15 23L9 23C6.7909 23 5 21.2091 5 19L5 5Z");
  stroke: none;
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.om3uvewpd {
  d: path("M6 5C6 3.3431 7.3431 2 9 2L15 2C16.6569 2 18 3.3431 18 5L18 19C18 20.6569 16.6569 22 15 22L9 22C7.3431 22 6 20.6569 6 19L6 5Z");
}
</style><g class="nrj6p8qat"><path class="kmm1aob7z"/><path class="om3uvewpd"/></g>`,
		"fallback": "keyline-icons:ratio-9-16-two-tone",
	});
}

export default Component;
