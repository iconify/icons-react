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
		"content": `<style>.sqouhrb7s {
  fill: currentColor;
  d: path("M11.66 6V4H6v5.66h2V7.41l5 5V20h2v-8.41L9.41 6z");
}
</style><path class="sqouhrb7s"/>`,
		"fallback": "ic:sharp-turn-slight-left",
	});
}

export default Component;
