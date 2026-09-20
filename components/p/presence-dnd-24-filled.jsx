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
		"content": `<style>.wk3oy6l7w {
  fill: currentColor;
  d: path("M12 24c6.627 0 12-5.373 12-12S18.627 0 12 0S0 5.373 0 12s5.373 12 12 12M7.5 10.5h9a1.5 1.5 0 0 1 0 3h-9a1.5 1.5 0 0 1 0-3");
}
</style><path class="wk3oy6l7w"/>`,
		"fallback": "fluent:presence-dnd-24-filled",
	});
}

export default Component;
