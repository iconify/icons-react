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
		"content": `<style>.nh6rklb7k {
  fill: currentColor;
  d: path("M11 15h2v2h-2zm0-7h2v5h-2z");
}

.yxui6b4fq {
  fill: currentColor;
  d: path("M18 2h-8L4.02 8L4 20c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2m0 18H6V8.83L10.83 4H18z");
}
</style><path class="yxui6b4fq"/><path class="nh6rklb7k"/>`,
		"fallback": "ic:outline-sim-card-alert",
	});
}

export default Component;
