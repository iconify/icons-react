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
		"content": `<style>.mqgemmolt {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M8.75 13h6.5v6h-6.5zm0 2.5l-3 2.5v3.25l3-1.75m6.5-4l3 2.5v3.25l-3-1.75");
}

.ux2u0rbkq {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
}

.vcvk_gbik {
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M12 7.5h.01");
}

.zian9euab {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m12 2.75l3 2.368V10.5H9V5.118z");
}
</style><g class="ux2u0rbkq"><path class="zian9euab"/><path class="vcvk_gbik"/><path class="mqgemmolt"/></g>`,
		"fallback": "iconoven:rocket-stage-sharp",
	});
}

export default Component;
