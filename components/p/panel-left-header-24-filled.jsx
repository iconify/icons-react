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
		"content": `<style>.ya8qi65ts {
  fill: currentColor;
  d: path("M2 7.25A3.25 3.25 0 0 1 5.25 4h13.5A3.25 3.25 0 0 1 22 7.25v9.5A3.25 3.25 0 0 1 18.75 20H5.25A3.25 3.25 0 0 1 2 16.75zm18.5 0a1.75 1.75 0 0 0-1.75-1.75H9.5V9h11zm0 3.25h-11v8h9.25a1.75 1.75 0 0 0 1.75-1.75z");
}
</style><path class="ya8qi65ts"/>`,
		"fallback": "fluent:panel-left-header-24-filled",
	});
}

export default Component;
