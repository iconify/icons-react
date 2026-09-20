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
		"content": `<style>.wg4unh1fu {
  fill: currentColor;
  d: path("M128 26a102 102 0 1 0 102 102A102.12 102.12 0 0 0 128 26m0 152a50 50 0 1 1 50-50a50.06 50.06 0 0 1-50 50m39.37-97.86A61.7 61.7 0 0 0 134 66.3V38.2a89.64 89.64 0 0 1 53.22 22.09ZM122 66.3a61.7 61.7 0 0 0-33.37 13.84L68.78 60.29A89.64 89.64 0 0 1 122 38.2ZM80.14 88.63A61.7 61.7 0 0 0 66.3 122H38.2a89.6 89.6 0 0 1 22.09-53.22ZM66.3 134a61.7 61.7 0 0 0 13.84 33.37l-19.85 19.85A89.6 89.6 0 0 1 38.2 134Zm22.33 41.86A61.7 61.7 0 0 0 122 189.7v28.1a89.64 89.64 0 0 1-53.22-22.09ZM134 189.7a61.7 61.7 0 0 0 33.37-13.84l19.85 19.85A89.64 89.64 0 0 1 134 217.8Zm41.86-22.33A61.7 61.7 0 0 0 189.7 134h28.1a89.6 89.6 0 0 1-22.09 53.22ZM189.7 122a61.7 61.7 0 0 0-13.84-33.37l19.85-19.85A89.6 89.6 0 0 1 217.8 122Z");
}
</style><path class="wg4unh1fu"/>`,
		"fallback": "ph:poker-chip-light",
	});
}

export default Component;
