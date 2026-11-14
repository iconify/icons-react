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

.lpqbunboo {
  d: path("M2.5 12a9.5 3.75 0 1 0 19 0a9.5 3.75 0 1 0-19 0");
}

.oa_rcabhy {
  d: path("M7.25 20.25a9.5 3.75 120 0 1 9.5-16.5a9.5 3.75 120 0 1-9.5 16.5M12 12h.01");
}

.zx4j8rbqk {
  d: path("M16.75 20.25a9.5 3.75 60 0 1-9.5-16.5a9.5 3.75 60 0 1 9.5 16.5");
}
</style><g class="hntgybcog"><path class="lpqbunboo"/><path class="zx4j8rbqk"/><path class="oa_rcabhy"/></g>`,
		"fallback": "uix:physics",
	});
}

export default Component;
