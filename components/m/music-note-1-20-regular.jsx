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
		"content": `<style>.qiqvm4b6j {
  fill: currentColor;
  d: path("M10.147 2.022A.5.5 0 0 0 9.5 2.5v9.905a3.25 3.25 0 1 0 .995 2.165l.005-.07V7.177l5.853 1.8A.5.5 0 0 0 17 8.5V5.977a2.5 2.5 0 0 0-1.765-2.39zM16 7.823l-5.5-1.692V3.177l4.441 1.366A1.5 1.5 0 0 1 16 5.977zM5 14.75a2.25 2.25 0 1 1 4.5 0a2.25 2.25 0 0 1-4.5 0");
}
</style><path class="qiqvm4b6j"/>`,
		"fallback": "fluent:music-note-1-20-regular",
	});
}

export default Component;
