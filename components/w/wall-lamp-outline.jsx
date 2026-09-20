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
		"content": `<style>.adfxjxs2v {
  fill: currentColor;
  d: path("M3 21v-6h2v6zm5.35-10h9.3l-1.8-6h-5.7zm0 0h9.3zM6 19v-2h5q.425 0 .713-.288T12 16v-3H7q-.5 0-.8-.387t-.15-.888l2.4-8q.1-.325.35-.525t.6-.2h7.2q.35 0 .6.2t.35.525l2.4 8q.15.5-.15.888T19 13h-5v3q0 1.25-.875 2.125T11 19z");
}
</style><path class="adfxjxs2v"/>`,
		"fallback": "material-symbols:wall-lamp-outline",
	});
}

export default Component;
