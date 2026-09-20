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
		"content": `<style>.pz-duebem {
  fill: currentColor;
  d: path("M128 20a108 108 0 1 0 108 108A108.12 108.12 0 0 0 128 20m0 192a84 84 0 1 1 84-84a84.09 84.09 0 0 1-84 84M76 108a16 16 0 1 1 16 16a16 16 0 0 1-16-16m72 0a16 16 0 1 1 16 16a16 16 0 0 1-16-16m30.92 64.94a12 12 0 0 1-16.78 2.52a38.2 38.2 0 0 1-7.74-8.26a35 35 0 0 0-2.4-3a35 35 0 0 0-2.4 3C146 172 140 180 128 180s-18-8-21.6-12.8a35 35 0 0 0-2.4-3a35 35 0 0 0-2.4 3a38.2 38.2 0 0 1-7.74 8.26a12 12 0 0 1-14.27-19.3a23 23 0 0 0 2.81-3.36C86 148 92 140 104 140s18 8 21.6 12.8a35 35 0 0 0 2.4 3a35 35 0 0 0 2.4-3C134 148 140 140 152 140s18 8 21.6 12.8a23 23 0 0 0 2.81 3.36a12 12 0 0 1 2.51 16.78");
}
</style><path class="pz-duebem"/>`,
		"fallback": "ph:smiley-nervous-bold",
	});
}

export default Component;
