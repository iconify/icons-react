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
		"content": `<style>.a-6x50jyc {
  fill: currentColor;
  d: path("M32 2C15.432 2 2 15.432 2 32s13.432 30 30 30s30-13.432 30-30S48.568 2 32 2m0 45c-8.284 0-15-6.717-15-15c0-8.285 6.716-15 15-15s15 6.715 15 15c0 8.283-6.716 15-15 15");
}
</style><path class="a-6x50jyc"/>`,
		"fallback": "emojione-monotone:radio-button",
	});
}

export default Component;
