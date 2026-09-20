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
		"content": `<style>.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.k2jzr9u7f {
  d: path("M5 7a3 3 0 1 0 6 0 3 3 0 1 0 -6 0");
}

.syzwwuxww {
  fill: currentColor;
  d: path("M13 15a3 3 0 1 0 6 0 3 3 0 1 0 -6 0");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.uyba0j-4z {
  d: path("M13 15a3 3 0 1 0 6 0 3 3 0 1 0 -6 0");
}

.wnz9a7lxg {
  fill: currentColor;
  d: path("M5 7a3 3 0 1 0 6 0 3 3 0 1 0 -6 0");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.wuegxr5di {
  d: path("m10 9 4 4");
}
</style><g class="hntgybcog"><path class="wnz9a7lxg"/><path class="syzwwuxww"/><path class="k2jzr9u7f"/><path class="uyba0j-4z"/><path class="wuegxr5di"/></g>`,
		"fallback": "iconmind:subagent-duotone-thin",
	});
}

export default Component;
