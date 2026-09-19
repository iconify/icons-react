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
		"content": `<style>.gibl43_-b {
  fill: currentColor;
  d: path("M2.5 4v3h5v12h3V7h5V4zm19 5h-9v3h3v7h3v-7h3z");
}
</style><path class="gibl43_-b"/>`,
		"fallback": "ic:outline-text-fields",
	});
}

export default Component;
