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
		"content": `<style>.bnbr32bwb {
  fill: currentColor;
  d: path("M12 8v12H3V4h5Z");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.cbojbkemm {
  d: path("M12 8v12H3V4h5Z");
}

.cfyvl-o0i {
  d: path("M16 12h4");
}

.mi_m6achy {
  d: path("m17 9 3 3 -3 3");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}
</style><g class="s0phu2bbs"><path class="bnbr32bwb"/><path class="cbojbkemm"/><path class="cfyvl-o0i"/><path class="mi_m6achy"/></g>`,
		"fallback": "iconmind:trigger-file-duotone-bold",
	});
}

export default Component;
