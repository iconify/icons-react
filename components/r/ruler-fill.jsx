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
		"content": `<style>.csz_fibeb {
  fill: currentColor;
  d: path("M235.32 96L96 235.31a16 16 0 0 1-22.63 0l-52.69-52.68a16 16 0 0 1 0-22.63l29.17-29.17a4 4 0 0 1 5.66 0l34.83 34.83a8 8 0 0 0 11.71-.43a8.18 8.18 0 0 0-.6-11.09l-34.63-34.63a4 4 0 0 1 0-5.65l15-15a4 4 0 0 1 5.66 0l34.83 34.83a8 8 0 0 0 11.71-.43a8.18 8.18 0 0 0-.6-11.09L98.83 87.51a4 4 0 0 1 0-5.65l15-15a4 4 0 0 1 5.65 0l34.83 34.83a8 8 0 0 0 11.72-.43a8.18 8.18 0 0 0-.61-11.09l-34.59-34.66a4 4 0 0 1 0-5.65L160 20.69a16 16 0 0 1 22.63 0l52.69 52.68a16 16 0 0 1 0 22.63");
}
</style><path class="csz_fibeb"/>`,
		"fallback": "ph:ruler-fill",
	});
}

export default Component;
