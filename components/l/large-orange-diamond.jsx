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
		"content": `<style>.ygcy4ztxv {
  fill: var(--svg-color--f27a52, #f27a52);
  d: path("M2.018 32L32 2.019l29.981 29.98L32 61.982z");
}
</style><path class="ygcy4ztxv"/>`,
		"fallback": "emojione:large-orange-diamond",
	});
}

export default Component;
