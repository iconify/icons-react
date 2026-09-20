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
		"content": `<style>.bod4n0b3z {
  d: path("M2 18h20");
}

.e-n_8dpfy {
  d: path("m9 13 2 -2");
}

.gpip01bqy {
  d: path("m3 15 5 -5 5 5 5 -5 3 3");
}

.l6_6xybod {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("m3 15 5 -5 5 5 5 -5 3 3");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.tci5ycndn {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("m9 13 2 -2");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.xdhl9rnnf {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("M2 18h20");
  opacity: var(--svg-opacity--0-2, 0.2);
}
</style><g class="nrj6p8qat"><path class="l6_6xybod"/><path class="xdhl9rnnf"/><path class="tci5ycndn"/><path class="gpip01bqy"/><path class="bod4n0b3z"/><path class="e-n_8dpfy"/></g>`,
		"fallback": "iconmind:landfill-duotone-regular",
	});
}

export default Component;
