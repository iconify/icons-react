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
		"content": `<style>.mq7nfwa1v {
  fill: currentColor;
  d: path("M13.575 22L7.6 16l1.6-1.65l2.8.825V7h2v7h1V6h2v8h1V8h2v6h1v-1h2v5q0 1.65-1.175 2.825T19 22zM2 19V3h19v2H4v12h1.8l1.975 2z");
}
</style><path class="mq7nfwa1v"/>`,
		"fallback": "material-symbols:trackpad-input-3-sharp",
	});
}

export default Component;
