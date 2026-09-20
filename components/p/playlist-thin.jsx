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
		"content": `<style>.c960stb2p {
  fill: currentColor;
  d: path("M36 64a4 4 0 0 1 4-4h176a4 4 0 0 1 0 8H40a4 4 0 0 1-4-4m4 68h120a4 4 0 0 0 0-8H40a4 4 0 0 0 0 8m72 56H40a4 4 0 0 0 0 8h72a4 4 0 0 0 0-8m131.83-62.85a4 4 0 0 1-5 2.68L204 117.38V192a28 28 0 1 1-8-19.57V112a4 4 0 0 1 5.15-3.83l40 12a4 4 0 0 1 2.68 4.98M196 192a20 20 0 1 0-20 20a20 20 0 0 0 20-20");
}
</style><path class="c960stb2p"/>`,
		"fallback": "ph:playlist-thin",
	});
}

export default Component;
