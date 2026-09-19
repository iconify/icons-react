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
		"content": `<style>.a5_15sbrr {
  fill: currentColor;
  d: path("M22 11h-5V6h-3v5h-4V3H7v8H1.84v2H7v8h3v-8h4v5h3v-5h5z");
}
</style><path class="a5_15sbrr"/>`,
		"fallback": "ic:twotone-align-vertical-center",
	});
}

export default Component;
