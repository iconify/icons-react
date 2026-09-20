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
		"content": `<style>.zm7wzhk1b {
  fill: currentColor;
  d: path("M3.75 3.5a.75.75 0 0 0 0 1.5h12.5a.75.75 0 0 0 0-1.5zm5 10a.75.75 0 0 0 0 1.5h7.5a.75.75 0 0 0 0-1.5zM8 9.25a.75.75 0 0 1 .75-.75h7.5a.75.75 0 0 1 0 1.5h-7.5A.75.75 0 0 1 8 9.25m-3.72 1.47a.75.75 0 0 0-1.06 1.06l.97.97l-.97.97a.75.75 0 1 0 1.06 1.06l1.5-1.5a.75.75 0 0 0 0-1.06z");
}
</style><path class="zm7wzhk1b"/>`,
		"fallback": "fluent:text-hanging-20-filled",
	});
}

export default Component;
