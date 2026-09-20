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
		"content": `<style>.q4qtq_bgm {
  fill: currentColor;
  d: path("M6 3a4 4 0 0 0-4 4v5a2 2 0 0 0 2 2v-1a1 1 0 0 1-1-1V7a3 3 0 0 1 3-3h7a1 1 0 0 1 1 1h1a2 2 0 0 0-2-2zm1 3a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h9a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2zM6 8a1 1 0 0 1 1-1h9a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1z");
}
</style><path class="q4qtq_bgm"/>`,
		"fallback": "fluent:slide-multiple-20-regular",
	});
}

export default Component;
