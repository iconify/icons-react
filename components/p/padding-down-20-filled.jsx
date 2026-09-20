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
		"content": `<style>.zpy9uqbyg {
  fill: currentColor;
  d: path("M3.75 2.75c0 .414.336.75.75.75H15A.75.75 0 0 0 15 2H4.5a.75.75 0 0 0-.75.75m0 14.5c0 .414.336.75.75.75h1.313a.75.75 0 0 0 0-1.5H4.5a.75.75 0 0 0-.75.75m3.938 0c0 .414.335.75.75.75h2.624a.75.75 0 0 0 0-1.5H8.439a.75.75 0 0 0-.75.75m5.25 0c0 .414.335.75.75.75H15a.75.75 0 0 0 0-1.5h-1.312a.75.75 0 0 0-.75.75m-2.658-1.97a.75.75 0 0 1-1.06 0l-4.25-4.25a.75.75 0 1 1 1.06-1.06L9 12.94V5.75a.75.75 0 0 1 1.5 0v7.19l2.97-2.97a.75.75 0 1 1 1.06 1.06z");
}
</style><path class="zpy9uqbyg"/>`,
		"fallback": "fluent:padding-down-20-filled",
	});
}

export default Component;
