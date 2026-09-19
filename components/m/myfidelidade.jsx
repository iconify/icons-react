import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.ehsi7sbcv {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M7.553 15.573L17.548 5.5l3.949 6.692l7.31 3.162l.943 3.666l10.697 6.285l-3.184 6.273l-3.421 1.83l-16.467.047l-7.44 9.034l-2.293.011z");
}
</style><path class="ehsi7sbcv"/>`,
		"fallback": "arcticons:myfidelidade",
	});
}

export default Component;
