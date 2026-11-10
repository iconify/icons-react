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
		"content": `<style>.bve253bat {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M14.121 9.88L17.293 6.71M6.707 17.29L9.879 14.12M17.293 17.29L14.121 14.12M9.879 9.88L6.707 6.71M3 3H21V21H3V3ZM12 15C10.343 15 9 13.66 9 12C9 10.34 10.343 9 12 9C13.657 9 15 10.34 15 12C15 13.66 13.657 15 12 15Z");
}
</style><path class="bve253bat"/>`,
		"fallback": "keyline-icons:vault-2-sharp",
	});
}

export default Component;
