import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.ov7be24bo {
  fill: currentColor;
  d: path("M10 20c5.523 0 10-4.477 10-10S15.523 0 10 0S0 4.477 0 10s4.477 10 10 10m4.207-11.793l-4.5 4.5a1 1 0 0 1-1.414 0l-2-2a1 1 0 1 1 1.414-1.414L9 10.586l3.793-3.793a1 1 0 1 1 1.414 1.414");
}
</style><path class="ov7be24bo"/>`,
		"fallback": "fluent:presence-available-20-filled",
	});
}

export default Component;
