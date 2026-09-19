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
		"content": `<style>.juq0kk3st {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M9.93 29.75V18.16h3.86a3.89 3.89 0 0 1 0 7.78H9.93m20.41 3.81V18.16h3.87a3.89 3.89 0 0 1 0 7.78h-3.87");
}

.n9y3hdesy {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M24 2a22 22 0 1 0 22 22A22 22 0 0 0 24 2m-2.88 27.78h5.76m-5.76-11.59h5.76m-5.76 5.79h5.76");
}
</style><path class="n9y3hdesy"/><path class="juq0kk3st"/>`,
		"fallback": "arcticons:pep",
	});
}

export default Component;
