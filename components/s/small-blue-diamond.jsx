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
		"content": `<style>.hcn1bidqy {
  fill: var(--svg-color--0071b8, #0071b8);
  d: path("m16.019 32l15.98-15.981l15.98 15.98L32 47.98z");
}
</style><path class="hcn1bidqy"/>`,
		"fallback": "emojione:small-blue-diamond",
	});
}

export default Component;
