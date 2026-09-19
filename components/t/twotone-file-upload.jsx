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
		"content": `<style>.lelesr8_m {
  fill: currentColor;
  d: path("M5 18h14v2H5zm0-8h4v6h6v-6h4l-7-7zm8-2v6h-2V8H9.83L12 5.83L14.17 8z");
}

.qf862bcub {
  fill: currentColor;
  d: path("M9.83 8H11v6h2V8h1.17L12 5.83z");
  opacity: var(--svg-opacity--0-3, 0.3);
}
</style><path class="qf862bcub"/><path class="lelesr8_m"/>`,
		"fallback": "ic:twotone-file-upload",
	});
}

export default Component;
