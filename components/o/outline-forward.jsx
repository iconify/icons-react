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
		"content": `<style>.dqf2hfhaf {
  fill: currentColor;
  d: path("M14 8.83L17.17 12L14 15.17V14H6v-4h8zM12 4v4H4v8h8v4l8-8z");
}
</style><path class="dqf2hfhaf"/>`,
		"fallback": "ic:outline-forward",
	});
}

export default Component;
