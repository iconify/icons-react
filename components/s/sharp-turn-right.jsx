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
		"content": `<style>.yw6av6bjx {
  fill: currentColor;
  d: path("m17.17 11l-1.58 1.59L17 14l4-4l-4-4l-1.41 1.41L17.17 9H7v11h2v-9z");
}
</style><path class="yw6av6bjx"/>`,
		"fallback": "ic:sharp-turn-right",
	});
}

export default Component;
