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
		"content": `<style>.dri233bjf {
  d: path("M5.5 7.5c0-4.5 6-5.5 6.75-1.75");
}

.qcbwp5emp {
  d: path("M3.5 7.5h4v13h-4Zm7.018-.629l3.464-2l6.5 11.258l-3.464 2Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="qcbwp5emp"/><path class="dri233bjf"/></g>`,
		"fallback": "uix-sharp:nunchaku-training",
	});
}

export default Component;
