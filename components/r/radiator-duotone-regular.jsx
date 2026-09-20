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
		"content": `<style>.kst16lb8k {
  d: path("M6 18.5V21");
}

.mcqij090l {
  fill: currentColor;
  d: path("M3 7a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2H5a2 2 0 0 1 -2 -2Z");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.s3lwy2n0b {
  d: path("M3 7a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2H5a2 2 0 0 1 -2 -2Z");
}

.uue3xmbwl {
  d: path("M15 5v14");
}

.wew0vnk_n {
  d: path("M12 5v14");
}

.yjd2gm3-w {
  d: path("M18 18.5V21");
}

.zto18nxmz {
  d: path("M9 5v14");
}
</style><g class="nrj6p8qat"><path class="mcqij090l"/><path class="s3lwy2n0b"/><path class="zto18nxmz"/><path class="wew0vnk_n"/><path class="uue3xmbwl"/><path class="kst16lb8k"/><path class="yjd2gm3-w"/></g>`,
		"fallback": "iconmind:radiator-duotone-regular",
	});
}

export default Component;
