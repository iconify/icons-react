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
		"content": `<style>.jcb62xcad {
  d: path("m16.657 4.843l-1.061 4.596l-5.303 5.304l-3.536-3.536l5.304-5.303Z");
}

.l_906ybdp {
  d: path("m9.586 8.379l-3.889.353L3.929 10.5l2.828.707Zm3.535 3.535l-.353 3.889L11 17.571l-.707-2.828ZM18 14.75v3.5M18 21h.01");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="jcb62xcad"/><path class="l_906ybdp"/></g>`,
		"fallback": "uix-sharp:rocket-alert",
	});
}

export default Component;
