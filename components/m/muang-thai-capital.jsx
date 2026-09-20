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
		"content": `<style>.gb_o8ib1w {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M20.652 33.88c3.67-3.724 9.5-11.434 9.965-25.313c.542 16.16 8.357 23.957 11.567 26.835");
}

.lynn4incc {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M27.348 33.88c-3.67-3.724-9.5-11.434-9.965-25.313c-.542 16.16-8.357 23.957-11.567 26.835");
}

.xm9uzjeuh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M45.5 24c0 11.874-9.626 21.5-21.5 21.5S2.5 35.874 2.5 24S12.126 2.5 24 2.5S45.5 12.126 45.5 24");
}
</style><path class="xm9uzjeuh"/><path class="lynn4incc"/><path class="gb_o8ib1w"/>`,
		"fallback": "arcticons:muang-thai-capital",
	});
}

export default Component;
