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
		"content": `<style>.njtv9ebzd {
  fill: currentColor;
  d: path("M19.1 12.67a2.286 2.286 0 0 1 3.232 3.232l-5.902 5.903a2.7 2.7 0 0 1-1.247.706l-1.831.458a1.088 1.088 0 0 1-1.319-1.319l.458-1.83c.118-.473.362-.904.706-1.248zm-7.85 7.994l-.084.336H6.25A3.25 3.25 0 0 1 3 17.75V6.25A3.25 3.25 0 0 1 6.25 3h5zM17.75 3A3.25 3.25 0 0 1 21 6.25v4.762a3.28 3.28 0 0 0-2.606.95l-5.644 5.643V3z");
}
</style><path class="njtv9ebzd"/>`,
		"fallback": "fluent:layout-column-two-edit-24-filled",
	});
}

export default Component;
