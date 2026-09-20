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
		"content": `<style>.ft5dv1b6b {
  fill: none;
}

.qtz4vobwn {
  fill: var(--svg-color--6286ff, #6286ff);
  d: path("M21 3H3v18h18z");
}

.zayvkm-ap {
  fill: var(--svg-color--fff, #fff);
  d: path("M18.12 8.412a.572.572 0 0 1-.733.607l-3.411-1.042a.57.57 0 0 0-.722.412l-.857 3.593a.57.57 0 0 1-.808.379L3 8.113v7.069l11.815 3.36a.57.57 0 0 0 .726-.547l.03-6.995a.57.57 0 0 1 .769-.532l2.578.959a.57.57 0 0 0 .76-.64L18.221 3h-.688z");
}
</style><g class="ft5dv1b6b"><path class="qtz4vobwn"/><path class="zayvkm-ap"/></g>`,
		"fallback": "token-branded:wallet-3",
	});
}

export default Component;
