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
		"content": `<style>.b8act2bim {
  fill: var(--svg-color--0071b8, #0071b8);
  d: path("M2.018 32L32 2.019l29.981 29.98L32 61.982z");
}
</style><path class="b8act2bim"/>`,
		"fallback": "emojione:large-blue-diamond",
	});
}

export default Component;
