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
		"content": `<style>.cx8rytfxu {
  d: path("M13 8h6");
}

.gla11n-mx {
  d: path("M5 8h5v5H5Z");
}

.l1lmw_bdv {
  d: path("M13 11h6");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.r96yn6b-w {
  d: path("M5 16.5h14");
}

.vyks9vbfn {
  d: path("M2 6a2 2 0 0 1 2 -2h16a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2H4a2 2 0 0 1 -2 -2Z");
}
</style><g class="nrj6p8qat"><path class="vyks9vbfn"/><path class="gla11n-mx"/><path class="cx8rytfxu"/><path class="l1lmw_bdv"/><path class="r96yn6b-w"/></g>`,
		"fallback": "iconmind:market-news-outline-regular",
	});
}

export default Component;
