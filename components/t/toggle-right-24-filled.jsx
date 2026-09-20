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
		"content": `<style>.i-uji_4ik {
  fill: currentColor;
  d: path("M7 7a5 5 0 0 0 0 10h10a5 5 0 0 0 0-10zm9.75 7.5a2.5 2.5 0 1 1 0-5a2.5 2.5 0 0 1 0 5");
}
</style><path class="i-uji_4ik"/>`,
		"fallback": "fluent:toggle-right-24-filled",
	});
}

export default Component;
