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
		"content": `<style>.cg0a9co7b {
  d: path("M7 21V8h10v13Z");
}

.d27-dpb3f {
  d: path("M9 15a3 3 0 1 0 6 0 3 3 0 1 0 -6 0");
}

.dj4rgmtcm {
  fill: currentColor;
  d: path("M9 15a3 3 0 1 0 6 0 3 3 0 1 0 -6 0");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.ha190wb6v {
  d: path("M10 8V4h4v4");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.ujstiybic {
  fill: currentColor;
  d: path("M7 21V8h10v13Z");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}
</style><g class="hntgybcog"><path class="ujstiybic"/><path class="dj4rgmtcm"/><path class="cg0a9co7b"/><path class="ha190wb6v"/><path class="d27-dpb3f"/></g>`,
		"fallback": "iconmind:sunscreen-duotone-thin",
	});
}

export default Component;
