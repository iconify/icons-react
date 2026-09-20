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

.q2q7-9bdn {
  d: path("M14 9a2 2 0 0 1 2 -2h4a2 2 0 0 1 2 2v6a2 2 0 0 1 -2 2h-4a2 2 0 0 1 -2 -2Z");
}

.s0mwfjblf {
  d: path("M2 9a2 2 0 0 1 2 -2h4a2 2 0 0 1 2 2v6a2 2 0 0 1 -2 2H4a2 2 0 0 1 -2 -2Z");
}

.wew0vnk_n {
  d: path("M12 5v14");
}
</style><g class="hntgybcog"><path class="s0mwfjblf"/><path class="q2q7-9bdn"/><path class="wew0vnk_n"/></g>`,
		"fallback": "iconmind:tenant-isolation-outline-thin",
	});
}

export default Component;
