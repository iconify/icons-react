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
		"content": `<style>.zk4oiryht {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M38.5 5.5H14.75L5.5 14.75V38.5a4 4 0 0 0 4 4h23.75l9.25-9.25V9.5a4 4 0 0 0-4-4m-33 27.75h37M5.5 24h37m-37-9.25h37m-27.75 0V42.5");
}
</style><path class="zk4oiryht"/>`,
		"fallback": "arcticons:microsoft-lists",
	});
}

export default Component;
