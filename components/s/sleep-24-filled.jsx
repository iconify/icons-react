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
		"content": `<style>.xo_4c0b9w {
  fill: currentColor;
  d: path("M13.378 3.026A9.004 9.004 0 1 1 5.475 17.13a.675.675 0 0 1 .329-1.019c3.391-1.214 5.208-2.62 6.262-4.633c1.11-2.118 1.396-4.438.62-7.619a.675.675 0 0 1 .692-.834m-2.384.627L11 3.75V9a2 2 0 1 1-1.499-1.937l-.001-2.3L6 5.829V10a2 2 0 1 1-1.499-1.937L4.5 5.273a.75.75 0 0 1 .43-.679l.102-.039l5-1.521a.75.75 0 0 1 .962.619");
}
</style><path class="xo_4c0b9w"/>`,
		"fallback": "fluent:sleep-24-filled",
	});
}

export default Component;
