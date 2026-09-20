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
		"content": `<style>.c90_nwb3u {
  fill: currentColor;
  d: path("M243.93 126.3A116.43 116.43 0 0 0 49 50.81a115.45 115.45 0 0 0-37 75.49A20 20 0 0 0 32 148h84v52a36 36 0 0 0 72 0a12 12 0 0 0-24 0a12 12 0 0 1-24 0v-52h84a20 20 0 0 0 20-21.7ZM36.44 124a92.45 92.45 0 0 1 154.25-55.54A91.56 91.56 0 0 1 219.56 124Z");
}
</style><path class="c90_nwb3u"/>`,
		"fallback": "ph:umbrella-simple-bold",
	});
}

export default Component;
