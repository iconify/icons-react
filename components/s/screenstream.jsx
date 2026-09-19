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
		"content": `<style>.ahdh2-a-d {
  cx: 26.094px;
  cy: 24px;
  r: 3.74px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.go7_j4b6b {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M33.024 17.97a9.18 9.18 0 0 1-.035 12.099m3.933-16.689a15.16 15.16 0 0 1 .03 21.21m-9.256-17.744V9.485A3.987 3.987 0 0 0 23.713 5.5H10.72a3.986 3.986 0 0 0-3.984 3.985v29.03A3.986 3.986 0 0 0 10.72 42.5h12.992a3.987 3.987 0 0 0 3.983-3.985V31.33M6.737 37.062h20.96M6.737 10.959h20.96");
}
</style><circle class="ahdh2-a-d"/><path class="go7_j4b6b"/>`,
		"fallback": "arcticons:screenstream",
	});
}

export default Component;
