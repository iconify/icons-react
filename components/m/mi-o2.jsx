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
		"content": `<style>.bmwai8ywp {
  cx: 19.816px;
  cy: 20.962px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  rx: 13.642px;
  ry: 15.461px;
}

.ta1mfsbqy {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M33.545 34.063a4.17 4.17 0 0 1 4.062-4.218a4.198 4.198 0 0 1 2.969 7.187c-1.719 1.406-7.03 5.468-7.03 5.468h8.28");
}
</style><path class="ta1mfsbqy"/><ellipse class="bmwai8ywp"/>`,
		"fallback": "arcticons:mi-o2",
	});
}

export default Component;
