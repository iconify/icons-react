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
		"content": `<style>.kk7rejbsc {
  cx: 28.267px;
  cy: 11.528px;
  r: 0.75px;
  fill: currentColor;
}

.wqka6g4pc {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m18.421 34.643l-.054 8.657m2.281-9.066l-2.128 4.212m2.43 5.054l-1.884-5.926m4.714-3.256l.166 8.968l1.211.022m2.773-.141l1.741-8.622l.83 8.755m-2.224-2.202l1.992.241m3.403 2.119l-.225-9.06c1.752-.27 2.862 3.163.118 4.67m4.709 4.357l-.225-9.06c1.752-.27 2.862 3.163.117 4.67");
}

.z9fvg0ogx {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M12.125 37.54c-7.053-3.495-3.868-15.185 3.338-24.176C21.293 6.09 31.078-.423 35.568 9.733c2.4 5.43 3.682 8.902 3.64 12.307c-.106 8.675-12.71 11.79-15.636 1.48");
}
</style><path class="z9fvg0ogx"/><circle class="kk7rejbsc"/><path class="wqka6g4pc"/>`,
		"fallback": "arcticons:klapp",
	});
}

export default Component;
