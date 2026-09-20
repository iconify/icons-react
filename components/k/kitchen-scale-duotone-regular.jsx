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
		"content": `<style>.d8golhb-x {
  fill: currentColor;
  d: path("M5 12a2 2 0 0 1 2 -2h10a2 2 0 0 1 2 2v6a2 2 0 0 1 -2 2H7a2 2 0 0 1 -2 -2Z");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.lhtxwmluz {
  d: path("M5 12a2 2 0 0 1 2 -2h10a2 2 0 0 1 2 2v6a2 2 0 0 1 -2 2H7a2 2 0 0 1 -2 -2Z");
}

.m0p17bc4l {
  fill: currentColor;
  d: path("M10 15a2 2 0 1 0 4 0 2 2 0 1 0 -4 0");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.m7goar83z {
  d: path("M10 15a2 2 0 1 0 4 0 2 2 0 1 0 -4 0");
}

.mhnr27bap {
  d: path("M12 7v3");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.ozi-k-boi {
  d: path("M3 7h18");
}
</style><g class="nrj6p8qat"><path class="d8golhb-x"/><path class="m0p17bc4l"/><path class="ozi-k-boi"/><path class="mhnr27bap"/><path class="lhtxwmluz"/><path class="m7goar83z"/></g>`,
		"fallback": "iconmind:kitchen-scale-duotone-regular",
	});
}

export default Component;
