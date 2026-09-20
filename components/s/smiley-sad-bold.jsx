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
		"content": `<style>.war207b7u {
  fill: currentColor;
  d: path("M128 20a108 108 0 1 0 108 108A108.12 108.12 0 0 0 128 20m0 192a84 84 0 1 1 84-84a84.09 84.09 0 0 1-84 84M76 108a16 16 0 1 1 16 16a16 16 0 0 1-16-16m104 0a16 16 0 1 1-16-16a16 16 0 0 1 16 16m-3.26 57a12 12 0 0 1-19.48 14a36 36 0 0 0-58.52 0a12 12 0 0 1-19.48-14a60 60 0 0 1 97.48 0");
}
</style><path class="war207b7u"/>`,
		"fallback": "ph:smiley-sad-bold",
	});
}

export default Component;
