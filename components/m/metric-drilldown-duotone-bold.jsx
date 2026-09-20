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
		"content": `<style>.dc7s40ben {
  fill: currentColor;
  d: path("M9 10a2 2 0 1 0 4 0 2 2 0 1 0 -4 0");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.dh-nlhghu {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("M4 4v16");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.jiw8u-asa {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("M4 20h16");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.nz5g1fb0o {
  d: path("M11.5 10.5 15 14");
}

.oifr9zbpt {
  d: path("M4 20h16");
}

.r3faxubne {
  d: path("M4 4v16");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.w9sbbjb4w {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("M11.5 10.5 15 14");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.zvg9k5fuv {
  d: path("M9 10a2 2 0 1 0 4 0 2 2 0 1 0 -4 0");
}
</style><g class="s0phu2bbs"><path class="dc7s40ben"/><path class="dh-nlhghu"/><path class="jiw8u-asa"/><path class="w9sbbjb4w"/><path class="r3faxubne"/><path class="oifr9zbpt"/><path class="zvg9k5fuv"/><path class="nz5g1fb0o"/></g>`,
		"fallback": "iconmind:metric-drilldown-duotone-bold",
	});
}

export default Component;
