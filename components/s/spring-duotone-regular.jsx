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
		"content": `<style>.apfnny4vx {
  d: path("M12 13c0 -4.8 3.2 -8 8 -8 0 4.8 -3.2 8 -8 8");
}

.is9tv4bei {
  fill: currentColor;
  d: path("M12 13c0 -4.8 3.2 -8 8 -8 0 4.8 -3.2 8 -8 8");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.jfu57lbgo {
  fill: currentColor;
  d: path("M4 13c0 -4.8 3.2 -8 8 -8 0 4.8 -3.2 8 -8 8");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.kjki_4mtw {
  d: path("M4 13c0 -4.8 3.2 -8 8 -8 0 4.8 -3.2 8 -8 8");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.ricsl-blc {
  d: path("M12 12v9");
}

.wneoubc6n {
  d: path("M7 21h10");
}
</style><g class="nrj6p8qat"><path class="jfu57lbgo"/><path class="is9tv4bei"/><path class="ricsl-blc"/><path class="kjki_4mtw"/><path class="apfnny4vx"/><path class="wneoubc6n"/></g>`,
		"fallback": "iconmind:spring-duotone-regular",
	});
}

export default Component;
