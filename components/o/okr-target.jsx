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
		"content": `<style>.ayk-facnc {
  cx: 12px;
  cy: 8.5px;
  r: 5.75px;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.jfxr4h1vm {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4.75 17.5h14.5M4.75 21h8.5");
}

.nntrnih8q {
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M12 8.5h.01");
}

.ukpi_e5ue {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M12 5.75a2.75 2.75 0 1 0 0 5.5a2.75 2.75 0 1 0 0-5.5");
}

.y9tr6bcfx {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}
</style><g class="y9tr6bcfx"><circle class="ayk-facnc"/><path class="ukpi_e5ue"/><path class="nntrnih8q"/><path class="jfxr4h1vm"/></g>`,
		"fallback": "iconoven:okr-target",
	});
}

export default Component;
