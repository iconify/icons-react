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
		"content": `<style>.xkyaywbxn {
  fill: currentColor;
  d: path("M17.5 5a.5.5 0 0 1 0 1h-15a.5.5 0 0 1 0-1zm0 3a.5.5 0 0 1 0 1h-15a.5.5 0 0 1 0-1zm-7.243 3a5.5 5.5 0 0 0-.657 1H2.5a.5.5 0 0 1 0-1zM9 14.5q0 .252.022.5H2.5a.5.5 0 0 1 0-1h6.522a6 6 0 0 0-.022.5m1 0a4.5 4.5 0 1 0 9 0a4.5 4.5 0 0 0-9 0m4.146-2.354a.5.5 0 0 1 .708.708L13.707 14H16.5a.5.5 0 0 1 0 1h-2.793l1.147 1.146a.5.5 0 0 1-.708.708l-2-2a.5.5 0 0 1-.146-.351v-.006a.5.5 0 0 1 .144-.348l.003-.003z");
}
</style><path class="xkyaywbxn"/>`,
		"fallback": "fluent:text-grammar-arrow-left-20-regular",
	});
}

export default Component;
