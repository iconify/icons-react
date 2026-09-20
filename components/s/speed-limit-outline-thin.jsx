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

.jl9s5eill {
  d: path("M9.5 8.5 12 6");
}

.mvkhxckkt {
  d: path("M12 6v6");
}

.r8vbx7bdh {
  d: path("M5 9a7 7 0 1 0 14 0A7 7 0 1 0 5 9");
}

.z475fobui {
  d: path("M12 16v6");
}
</style><g class="hntgybcog"><path class="r8vbx7bdh"/><path class="z475fobui"/><path class="mvkhxckkt"/><path class="jl9s5eill"/></g>`,
		"fallback": "iconmind:speed-limit-outline-thin",
	});
}

export default Component;
