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
		"content": `<style>.g1isrostl {
  fill: currentColor;
  d: path("M3 20v-6h3v6zm5-6V9h3v5zm5-5V4h3v5zm5 11V4h3v16z");
}
</style><path class="g1isrostl"/>`,
		"fallback": "material-symbols:waterfall-chart",
	});
}

export default Component;
