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
		"content": `<style>.v1juhccxn {
  fill: currentColor;
  d: path("M10.75 8.25a1 1 0 1 1-2 0a1 1 0 0 1 2 0m2.75 0a1 1 0 1 1-2 0a1 1 0 0 1 2 0m3 0a1 1 0 1 1-2 0a1 1 0 0 1 2 0m3 0a1 1 0 1 1-2 0a1 1 0 0 1 2 0m-9.75 8.5a1 1 0 1 0 0-2a1 1 0 0 0 0 2m2.75 0a1 1 0 1 0 0-2a1 1 0 0 0 0 2m3 0a1 1 0 1 0 0-2a1 1 0 0 0 0 2m3 0a1 1 0 1 0 0-2a1 1 0 0 0 0 2M5 4a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3zm14 1.5A1.5 1.5 0 0 1 20.5 7v4.25h-13V5.5zm1.5 7.25V17a1.5 1.5 0 0 1-1.5 1.5H7.5v-5.75zM6 11.25H3.5V7A1.5 1.5 0 0 1 5 5.5h1zm-2.5 1.5H6v5.75H5A1.5 1.5 0 0 1 3.5 17z");
}
</style><path class="v1juhccxn"/>`,
		"fallback": "fluent:likert-24-regular",
	});
}

export default Component;
