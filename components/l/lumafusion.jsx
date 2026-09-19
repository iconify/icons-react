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
		"content": `<style>.j3s9ivbxi {
  width: 37px;
  height: 37px;
  x: 5.5px;
  y: 5.5px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  rx: 4px;
  ry: 4px;
}

.mx0kt0kpe {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M34.53 15.678c-8.338 3.67-19.653 10.39-29.03 18.054m1.523 7.914c7.355-9.55 16.66-18.39 27.578-25.964m-.348-.004C24.268 17.518 14.64 21.566 5.5 25.969M15.304 42.5c5.495-11.157 11.67-18.292 19.346-26.818m-1.205 0c-9.513.665-19.048 1.965-27.945 4.47m0-4.47h37m0 8.322H27.394");
}
</style><path class="mx0kt0kpe"/><rect class="j3s9ivbxi"/>`,
		"fallback": "arcticons:lumafusion",
	});
}

export default Component;
