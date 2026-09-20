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
		"content": `<style>.d_-qbhb1a {
  fill: currentColor;
  d: path("M3.5 3a.5.5 0 0 0 0 1h13a.5.5 0 0 0 0-1zM8 12V8.415q.243.085.5.085v1a1.5 1.5 0 0 0 3 0v-1q.256 0 .5-.085V12zm7 5h-2v-4h4v2a2 2 0 0 1-2 2m2-5h-4V8h3.5a.5.5 0 0 1 .5.5zm-9 5h4v-4H8zM7 8v4H3V8.5a.5.5 0 0 1 .5-.5zm0 9H5a2 2 0 0 1-2-2v-2h4zm4.146-9.646a.5.5 0 0 0 .708-.708l-1.5-1.5a.5.5 0 0 0-.708 0l-1.5 1.5a.5.5 0 1 0 .708.708l.646-.647V9.5a.5.5 0 0 0 1 0V6.707z");
}
</style><path class="d_-qbhb1a"/>`,
		"fallback": "fluent:table-move-above-20-filled",
	});
}

export default Component;
