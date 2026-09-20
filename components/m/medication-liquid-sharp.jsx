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
		"content": `<style>.boydm43ab {
  fill: currentColor;
  d: path("M4 5.23v-1h10v1zm3.885 11.886h2.23v-2.5h2.5v-2.231h-2.5v-2.5h-2.23v2.5h-2.5v2.23h2.5zM3 20V7h12v13zm15.77-6.077q-.876-.425-1.438-1.326q-.563-.9-.563-2.089q0-1.497.728-2.502Q18.225 7 19.269 7t1.772 1.006t.728 2.494q0 1.196-.562 2.097t-1.438 1.326V20h-1z");
}
</style><path class="boydm43ab"/>`,
		"fallback": "material-symbols-light:medication-liquid-sharp",
	});
}

export default Component;
