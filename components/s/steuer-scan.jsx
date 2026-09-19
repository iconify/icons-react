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
		"content": `<style>.x9mx-2-nx {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M5.5 14.926V9.5a4 4 0 0 1 4-4h5.271m0 37H9.5a4 4 0 0 1-4-4v-5.426m37 0V38.5a4 4 0 0 1-4 4h-5.271m0-37H38.5a4 4 0 0 1 4 4v5.426m-29.928 1.359h23.253M12.572 23.91H26.33m-13.758 7.625H26.33m4.752 0h4.743");
}
</style><path class="x9mx-2-nx"/>`,
		"fallback": "arcticons:steuer-scan",
	});
}

export default Component;
