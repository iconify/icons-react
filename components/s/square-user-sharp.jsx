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
		"content": `<style>.odscxhnfn {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M3 3L21 3L21 21L3 21ZM12 7C13.1046 7 14 7.8954 14 9C14 10.1046 13.1046 11 12 11C10.8954 11 10 10.1046 10 9C10 7.8954 10.8954 7 12 7ZM17 21L17 19C17 16.7909 15.2091 15 13 15L11 15C8.7909 15 7 16.7909 7 19L7 21");
}
</style><path class="odscxhnfn"/>`,
		"fallback": "keyline-icons:square-user-sharp",
	});
}

export default Component;
