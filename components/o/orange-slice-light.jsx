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
		"content": `<style>.b3u13xb3e {
  fill: currentColor;
  d: path("M248 82H8a6 6 0 0 0-6 6a126 126 0 0 0 252 0a6 6 0 0 0-6-6M74.46 150L122 102.48v67.28A81.66 81.66 0 0 1 74.46 150M66 141.54A81.66 81.66 0 0 1 46.24 94h67.28Zm68-39.06L181.54 150A81.66 81.66 0 0 1 134 169.76Zm56 39.06L142.48 94h67.28A81.66 81.66 0 0 1 190 141.54M128 202A114.14 114.14 0 0 1 14.16 94h20a94 94 0 0 0 187.6 0h20A114.14 114.14 0 0 1 128 202");
}
</style><path class="b3u13xb3e"/>`,
		"fallback": "ph:orange-slice-light",
	});
}

export default Component;
