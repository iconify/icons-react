import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.pcaow8bgg {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("m16 9 -4 -4v12a3 3 0 1 1 -6 0 3 3 0 1 1 6 0");
}
</style><path class="pcaow8bgg"/>`,
		"fallback": "iconmind:music-gen-outline-regular",
	});
}

export default Component;
