import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.dshqhwu5g {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M35.1 42.5v-5.4c0-1.108.891-2 2-2h5.4v7.4z");
}

.qtx7bd0ql {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M31.08 6.909A18.5 18.5 0 1 0 24 42.499h9.25a7.4 7.4 0 0 0-7.4-7.4H24A11.1 11.1 0 1 1 35.1 24v1.85a7.4 7.4 0 0 0 7.4 7.4V24A18.5 18.5 0 0 0 31.08 6.907z");
}
</style><path class="qtx7bd0ql"/><path class="dshqhwu5g"/>`,
		"fallback": "arcticons:qtalk",
	});
}

export default Component;
