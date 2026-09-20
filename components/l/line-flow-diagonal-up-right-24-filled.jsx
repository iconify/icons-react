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
		"content": `<style>.w8z74mkci {
  fill: currentColor;
  d: path("M19.78 5.28a.75.75 0 0 0-1.06-1.06l-9.472 9.47a4 4 0 1 0 1.06 1.06z");
}
</style><path class="w8z74mkci"/>`,
		"fallback": "fluent:line-flow-diagonal-up-right-24-filled",
	});
}

export default Component;
