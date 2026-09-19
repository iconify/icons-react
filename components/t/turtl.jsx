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
		"content": `<style>.w2oxxac3t {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M22.39 4.5v9.28L16 17.51l-8-4.65Zm3.22 0l14.47 8.35L32 17.5l-6.43-3.73ZM6.31 15.64l8 4.64v7.43l-8 4.65Zm35.38 0v16.71l-8-4.64v-7.43ZM24 16.57l6.43 3.71v7.43L24 31.43l-6.43-3.72v-7.43Zm-8 13.92l6.43 3.73v9.28L7.92 35.14Zm16 0l8 4.65l-14.39 8.36v-9.28Z");
}
</style><path class="w2oxxac3t"/>`,
		"fallback": "arcticons:turtl",
	});
}

export default Component;
