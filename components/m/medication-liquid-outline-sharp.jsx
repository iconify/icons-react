import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.fv120ccsh {
  fill: currentColor;
  d: path("M4 5.23v-1h10v1zm3.885 11.886h2.23v-2.5h2.5v-2.231h-2.5v-2.5h-2.23v2.5h-2.5v2.23h2.5zM3 20V7h12v13zm1-1h10V8H4zm14.77-5.077q-.876-.425-1.438-1.326q-.563-.9-.563-2.089q0-1.497.728-2.502Q18.225 7 19.269 7t1.772 1.006t.728 2.494q0 1.196-.562 2.097t-1.438 1.326V20h-1zm1.476-1.595q.523-.672.523-1.828t-.526-1.828T19.266 8q-.45 0-.974.672q-.523.671-.523 1.828q0 1.156.526 1.828t.977.672t.974-.672M19.27 10.5");
}
</style><path class="fv120ccsh"/>`,
		"fallback": "material-symbols-light:medication-liquid-outline-sharp",
	});
}

export default Component;
