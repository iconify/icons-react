import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":36,"height":36};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.gy4ziabpn {
  fill: var(--svg-color--e1e8ed, #e1e8ed);
  d: path("m32.415 9.586l-9-9a2.001 2.001 0 0 0-2.829 2.829l-3.859 3.859l9 9l3.859-3.859a2 2 0 0 0 2.829-2.829");
}

.w4lf10ybm {
  fill: var(--svg-color--99aab5, #99aab5);
  d: path("M22 0h-2v9a4 4 0 0 0 4 4h9v-2h-9c-1 0-2-1-2-2zm-5 8a1 1 0 0 1-1 1H8a1 1 0 0 1 0-2h8a1 1 0 0 1 1 1m0 4a1 1 0 0 1-1 1H8a1 1 0 0 1 0-2h8a1 1 0 0 1 1 1m12 4a1 1 0 0 1-1 1H8a1 1 0 0 1 0-2h20a1 1 0 0 1 1 1m0 4a1 1 0 0 1-1 1H8a1 1 0 1 1 0-2h20a1 1 0 0 1 1 1m0 4a1 1 0 0 1-1 1H8a1 1 0 1 1 0-2h20a1 1 0 0 1 1 1m0 4a1 1 0 0 1-1 1H8a1 1 0 1 1 0-2h20a1 1 0 0 1 1 1");
}

.wnkl8hb-n {
  fill: var(--svg-color--ccd6dd, #ccd6dd);
  d: path("M22 0H7a4 4 0 0 0-4 4v28a4 4 0 0 0 4 4h22a4 4 0 0 0 4-4V11h-9c-1 0-2-1-2-2z");
}
</style><path class="gy4ziabpn"/><path class="wnkl8hb-n"/><path class="w4lf10ybm"/>`,
		"fallback": "twemoji:page-facing-up",
	});
}

export default Component;
