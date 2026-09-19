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
		"content": `<style>.pvbtn6bep {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M42.82 31.222a13.5 13.5 0 0 0-24.281 8.122");
}

.ru5i80b0l {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M43.5 20.864A21.952 21.952 0 0 0 9.82 39.417");
}

.uk4nzubsu {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M37.876 39.344a5.434 5.434 0 0 0-10.867 0Z");
}

.zkwwtgdij {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M43.45 10.606A30.87 30.87 0 0 0 4.5 26.363");
}
</style><path class="uk4nzubsu"/><path class="pvbtn6bep"/><path class="ru5i80b0l"/><path class="zkwwtgdij"/>`,
		"fallback": "arcticons:katwarn",
	});
}

export default Component;
