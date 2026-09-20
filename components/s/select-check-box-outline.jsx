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
		"content": `<style>.yfcuodb2e {
  fill: currentColor;
  d: path("M5 21q-.825 0-1.412-.587T3 19V5q0-.825.588-1.412T5 3h14q.2 0 .375.038t.35.112L17.875 5H5v14h14v-6.65l2-2V19q0 .825-.587 1.413T19 21zm6.525-4l-5.65-5.65l1.4-1.4l4.25 4.25L20.7 5.025L22.125 6.4z");
}
</style><path class="yfcuodb2e"/>`,
		"fallback": "material-symbols:select-check-box-outline",
	});
}

export default Component;
