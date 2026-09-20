import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.x9u9upufs {
  fill: currentColor;
  d: path("M28.5 14.5H22V12h7v2.53q-.245-.03-.5-.03M20 12v2.5h-1.5a4 4 0 0 0-4 4V20H12v-8zm-8 10h2.5v5.5a4 4 0 0 0 .29 1.5H12zm10-12h7V7.5A4.5 4.5 0 0 0 24.5 3H22zm-2-7v7h-8V3zM10 20v-8H3v8zm0-10V3H7.5A4.5 4.5 0 0 0 3 7.5V10zm0 19v-7H3v2.5A4.5 4.5 0 0 0 7.5 29zm8.5-13a2.5 2.5 0 0 0-2.5 2.5v9a2.5 2.5 0 0 0 2.5 2.5h10a2.5 2.5 0 0 0 2.5-2.5v-9a2.5 2.5 0 0 0-2.5-2.5zm.75 5.5a.75.75 0 0 1 0-1.5h8.5a.75.75 0 0 1 0 1.5zm-.75 3.75a.75.75 0 0 1 .75-.75h8.5a.75.75 0 0 1 0 1.5h-8.5a.75.75 0 0 1-.75-.75");
}
</style><path class="x9u9upufs"/>`,
		"fallback": "fluent:table-alt-text-32-filled",
	});
}

export default Component;
