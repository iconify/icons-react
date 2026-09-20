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
		"content": `<style>.a51oytv8p {
  d: path("M13 4a2 2 0 1 0 4 0 2 2 0 1 0 -4 0");
}

.advi1_bna {
  fill: currentColor;
  d: path("M13 4a2 2 0 1 0 4 0 2 2 0 1 0 -4 0");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.gtupknb2n {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("M15 15.5a4.5 4.5 0 0 1 -9 0");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.jz3tfobnp {
  d: path("M15 6v9.5");
}

.lx0k70b5y {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("M15 6v9.5");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.nrha8_hiz {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("M6 11v4.5");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.op8_xbqqk {
  d: path("M6 11v4.5");
}

.ur5cuwbiy {
  d: path("M15 15.5a4.5 4.5 0 0 1 -9 0");
}
</style><g class="hntgybcog"><path class="advi1_bna"/><path class="lx0k70b5y"/><path class="gtupknb2n"/><path class="nrha8_hiz"/><path class="a51oytv8p"/><path class="jz3tfobnp"/><path class="ur5cuwbiy"/><path class="op8_xbqqk"/></g>`,
		"fallback": "iconmind:phishing-duotone-thin",
	});
}

export default Component;
