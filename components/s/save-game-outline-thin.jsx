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
		"content": `<style>.eq8p65fcb {
  d: path("M4 4v16h16V4Z");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.itwbxpr-a {
  d: path("M8 4v5h8V4");
}

.kct9dt-jd {
  d: path("M8 20v-6h8v6");
}
</style><g class="hntgybcog"><path class="eq8p65fcb"/><path class="itwbxpr-a"/><path class="kct9dt-jd"/></g>`,
		"fallback": "iconmind:save-game-outline-thin",
	});
}

export default Component;
