import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.y_dpu24nt {
  fill: currentColor;
  d: path("M240 126.63A112.44 112.44 0 0 0 51.75 53.75a111.56 111.56 0 0 0-35.7 72.88A16 16 0 0 0 32 144h88v56a32 32 0 0 0 64 0a8 8 0 0 0-16 0a16 16 0 0 1-32 0v-56h88a16 16 0 0 0 16-17.37M32 128a96.43 96.43 0 0 1 161.4-62.48A95.32 95.32 0 0 1 224 128Z");
}
</style><path class="y_dpu24nt"/>`,
		"fallback": "ph:umbrella-simple",
	});
}

export default Component;
