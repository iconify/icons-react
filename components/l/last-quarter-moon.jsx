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
		"content": `<style>.dugux1ycr {
  fill: currentColor;
  d: path("M32.002 2h-.004C15.431 2 2 15.432 2 32c0 16.569 13.431 30 29.998 30h.004C48.569 62 62 48.568 62 32S48.569 2 32.002 2M4 32C4 16.537 16.536 4 31.998 4c.244 0 .482.013.725.019c.748 4.341 1.279 15.229 1.279 27.981c0 12.754-.531 23.641-1.279 27.983c-.243.005-.481.017-.725.017C16.536 60 4 47.465 4 32");
}
</style><path class="dugux1ycr"/>`,
		"fallback": "emojione-monotone:last-quarter-moon",
	});
}

export default Component;
