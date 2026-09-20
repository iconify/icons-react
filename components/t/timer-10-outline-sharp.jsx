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
		"content": `<style>.bg__msbli {
  fill: currentColor;
  d: path("M12.827 16.885h4.77v-9.77h-4.77zm-1.23 1.23V5.886h7.23v12.23zm-4 0v-11H5.191v-1.23h3.635v12.23z");
}
</style><path class="bg__msbli"/>`,
		"fallback": "material-symbols-light:timer-10-outline-sharp",
	});
}

export default Component;
