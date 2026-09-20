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
		"content": `<style>.a7_9wnfxj {
  fill: currentColor;
  d: path("M6 6h12v7H6Z");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.e7fjltb5i {
  d: path("M12 13v8");
}

.gvgmi5cyl {
  d: path("M6 6h12v7H6Z");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.mcs12xbpj {
  d: path("M10 8v3");
}

.ubusnobws {
  d: path("M14 8v3");
}
</style><g class="hntgybcog"><path class="a7_9wnfxj"/><path class="gvgmi5cyl"/><path class="mcs12xbpj"/><path class="ubusnobws"/><path class="e7fjltb5i"/></g>`,
		"fallback": "iconmind:spatula-duotone-thin",
	});
}

export default Component;
