import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":64,"height":64};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.ms5oz7msp {
  fill: currentColor;
  d: path("M32 2C15.432 2 2 15.432 2 32.001C2 48.567 15.432 62 32 62s30-13.433 30-29.999C62 15.432 48.568 2 32 2m22 30.001c0 4.629-1.433 8.922-3.876 12.465l-30.591-30.59A21.9 21.9 0 0 1 32 10c12.15 0 22 9.851 22 22.001m-44 0a21.9 21.9 0 0 1 3.876-12.468l30.591 30.591A21.9 21.9 0 0 1 32 54.001c-12.15 0-22-9.852-22-22");
}
</style><path class="ms5oz7msp"/>`,
		"fallback": "emojione-monotone:prohibited",
	});
}

export default Component;
