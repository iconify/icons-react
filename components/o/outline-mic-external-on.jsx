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
		"content": `<style>.c_u928bnh {
  fill: currentColor;
  d: path("M9.22 7c.48-.53.78-1.23.78-2c0-1.66-1.34-3-3-3S4 3.34 4 5c0 .77.3 1.47.78 2z");
}

.iu-z93beq {
  fill: currentColor;
  d: path("M16 2c-2.21 0-4 1.79-4 4v12c0 1.1-.9 2-2 2s-2-.9-2-2h1l1-10H4l1 10h1c0 2.21 1.79 4 4 4s4-1.79 4-4V6c0-1.1.9-2 2-2s2 .9 2 2v16h2V6c0-2.21-1.79-4-4-4M7.19 16h-.38l-.6-6h1.58z");
}
</style><path class="c_u928bnh"/><path class="iu-z93beq"/>`,
		"fallback": "ic:outline-mic-external-on",
	});
}

export default Component;
