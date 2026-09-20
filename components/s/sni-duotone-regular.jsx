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
		"content": `<style>.d0m2g8bjt {
  d: path("m7 21 3 -3h7");
}

.druahpb2o {
  d: path("M6 11h9");
}

.jxsm4bcvu {
  fill: currentColor;
  d: path("M18.5 18a1 1 0 1 0 2 0 1 1 0 1 0 -2 0");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.lyyswacbl {
  d: path("M3 5a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v7a2 2 0 0 1 -2 2H5a2 2 0 0 1 -2 -2Z");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.slu778b9b {
  d: path("M18.5 18a1 1 0 1 0 2 0 1 1 0 1 0 -2 0");
}

.uhkv12boy {
  fill: currentColor;
  d: path("M3 5a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v7a2 2 0 0 1 -2 2H5a2 2 0 0 1 -2 -2Z");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.uxsptjbvt {
  d: path("M6 7h12");
}
</style><g class="nrj6p8qat"><path class="uhkv12boy"/><path class="jxsm4bcvu"/><path class="lyyswacbl"/><path class="uxsptjbvt"/><path class="druahpb2o"/><path class="d0m2g8bjt"/><path class="slu778b9b"/></g>`,
		"fallback": "iconmind:sni-duotone-regular",
	});
}

export default Component;
