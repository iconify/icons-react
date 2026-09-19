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
		"content": `<style>.kwkt8cbtv {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M24.945 39.348L7.389 8.652H42.5z");
}

.vp6eec1lb {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m5.5 11.892l15.896 27.456L37.29 11.892z");
}
</style><path class="vp6eec1lb"/><path class="kwkt8cbtv"/>`,
		"fallback": "arcticons:volksverpetzer",
	});
}

export default Component;
