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
		"content": `<style>.h1gibbcfq {
  fill: currentColor;
  d: path("M21 0H3v24h18zm-7 22h-4v-1h4zm5.25-3H4.75V3h14.5z");
}
</style><path class="h1gibbcfq"/>`,
		"fallback": "ic:sharp-tablet-android",
	});
}

export default Component;
