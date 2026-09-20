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
		"content": `<style>.w718t6bgi {
  fill: currentColor;
  d: path("M92 108a24 24 0 1 0 24 24a24 24 0 0 0-24-24m0 40a16 16 0 1 1 16-16a16 16 0 0 1-16 16m72-40a24 24 0 1 0 24 24a24 24 0 0 0-24-24m0 40a16 16 0 1 1 16-16a16 16 0 0 1-16 16M128 20C72.86 20 28 63.07 28 116c0 33.43 18.33 64.64 48 82v18a12 12 0 0 0 12 12h80a12 12 0 0 0 12-12v-18c29.67-17.38 48-48.59 48-82c0-52.93-44.86-96-100-96m46.06 172.19a4 4 0 0 0-2.06 3.5V216a4 4 0 0 1-4 4h-20v-28a4 4 0 0 0-8 0v28h-24v-28a4 4 0 0 0-8 0v28H88a4 4 0 0 1-4-4v-20.31a4 4 0 0 0-2.06-3.5C53.6 176.48 36 147.29 36 116c0-48.52 41.27-88 92-88s92 39.48 92 88c0 31.29-17.6 60.48-45.94 76.19");
}
</style><path class="w718t6bgi"/>`,
		"fallback": "ph:skull-thin",
	});
}

export default Component;
