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
		"content": `<style>.t1ngo9agg {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m21.264 5.88l13.707 13.654c2.577 2.578 2.92 6.416.402 8.7c-2.518 2.286-6.31 3.143-9.504 0L12.162 14.448c-2.15-2.37-1.303-6.42.776-8.326c2.08-1.905 6.085-2.311 8.326-.24");
}

.yo6hrzkof {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m35.373 28.235l-13.48 13.513c-3.067 2.612-6.882 2.043-8.97 0c-2.09-2.043-2.871-5.888-.19-8.557l9.17-8.945");
}
</style><path class="t1ngo9agg"/><path class="yo6hrzkof"/>`,
		"fallback": "arcticons:mpvkt",
	});
}

export default Component;
