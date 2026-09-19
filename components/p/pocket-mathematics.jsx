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
		"content": `<style>.aiv--cbwt {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m24 16.932l9.965-9.965A5 5 0 0 1 37.5 5.502h0a5 5 0 0 1 3.535 8.535l-9.965 9.965M24 31.072l-9.965 9.964a5 5 0 0 1-7.07-7.07l9.965-9.965");
}

.w_tw_5b8q {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M10.5 5.5a5 5 0 0 0-3.535 8.535l27 27a5 5 0 0 0 7.07-7.07l-27-27A5 5 0 0 0 10.5 5.5");
}
</style><path class="w_tw_5b8q"/><path class="aiv--cbwt"/>`,
		"fallback": "arcticons:pocket-mathematics",
	});
}

export default Component;
