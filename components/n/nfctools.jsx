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
		"content": `<style>.mb2brrx6f {
  width: 17.53px;
  height: 30.79px;
  x: 4.5px;
  y: 8.6px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  rx: 1.58px;
}

.v5u49c_1e {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M36.07 9.29a18.28 18.28 0 0 1 0 29.42m-4-24.16a11.84 11.84 0 0 1 5 9.45a11.84 11.84 0 0 1-5 9.45m-3.68-14a5.67 5.67 0 0 1 0 9.1");
}

.wi_6vvruu {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M4.5 12.55h17.53M4.5 35.45h17.53");
}
</style><path class="v5u49c_1e"/><rect class="mb2brrx6f"/><path class="wi_6vvruu"/>`,
		"fallback": "arcticons:nfctools",
	});
}

export default Component;
