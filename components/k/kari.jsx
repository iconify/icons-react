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
		"content": `<style>.fz6i9etlj {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M5.5 30c0-9.665 8.507-17.5 19-17.5");
}

.qg9jk_bqg {
  cx: 24.5px;
  cy: 22.5px;
  r: 10px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.yyqosccjp {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M24 5.5C13.783 5.5 5.5 13.783 5.5 24v18.5H24c10.217 0 18.5-8.283 18.5-18.5S34.217 5.5 24 5.5");
}
</style><path class="yyqosccjp"/><circle class="qg9jk_bqg"/><path class="fz6i9etlj"/>`,
		"fallback": "arcticons:kari",
	});
}

export default Component;
