import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.dmj1_2btg {
  fill: currentColor;
  d: path("M8.732 9A2 2 0 1 1 7 8h6a2 2 0 1 1-1.732 1zM6 10a1 1 0 1 0 2 0a1 1 0 0 0-2 0m7-1a1 1 0 1 0 0 2a1 1 0 0 0 0-2M4 4a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2zM3 6a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1z");
}
</style><path class="dmj1_2btg"/>`,
		"fallback": "fluent:voicemail-20-regular",
	});
}

export default Component;
