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
		"content": `<style>.v5gkqkb2x {
  fill: currentColor;
  d: path("M17.83 15h2.67v-3.5H17v-1h2v.5h1.5V9h-5v3.5H19v1h-2V13h-1.17zM8 10.83V15H6.5v-2.5h-2V15H3V9h1.5v2h2V9.33L1.39 4.22L2.8 2.81l18.38 18.38l-1.41 1.41l-7.6-7.6H10v-2.17z");
}
</style><path class="v5gkqkb2x"/>`,
		"fallback": "ic:sharp-hls-off",
	});
}

export default Component;
