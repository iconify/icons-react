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
		"content": `<style>.vuj5eeb-l {
  fill: currentColor;
  d: path("M128 172a44.05 44.05 0 0 0 44-44V64a44 44 0 0 0-88 0v64a44.05 44.05 0 0 0 44 44M92 64a36 36 0 0 1 72 0v64a36 36 0 0 1-72 0Zm40 139.89V240a4 4 0 0 1-8 0v-36.11A76.09 76.09 0 0 1 52 128a4 4 0 0 1 8 0a68 68 0 0 0 136 0a4 4 0 0 1 8 0a76.09 76.09 0 0 1-72 75.89");
}
</style><path class="vuj5eeb-l"/>`,
		"fallback": "ph:microphone-thin",
	});
}

export default Component;
