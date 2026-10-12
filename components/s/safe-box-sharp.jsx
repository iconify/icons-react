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
		"content": `<style>.c8fw_bcfb {
  d: path("M2.75 3.75h18.5V18.5H2.75zM6.5 18.5v2m11-2v2M5.5 7v1.75m0 4.75v1.75");
}

.kny_pabcv {
  d: path("M13 11.25V9");
}

.uvig46c8n {
  cx: 13px;
  cy: 11.25px;
  r: 3.5px;
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><path class="c8fw_bcfb"/><circle class="uvig46c8n"/><path class="kny_pabcv"/></g>`,
		"fallback": "iconoven:safe-box-sharp",
	});
}

export default Component;
