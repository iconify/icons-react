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
		"content": `<style>.w3_922b-a {
  fill: currentColor;
  d: path("M26.493 7.254A4.5 4.5 0 0 1 28.5 11v9.5a8 8 0 0 1-8 8H11a4.5 4.5 0 0 1-3.746-2.007q.123.006.246.007h13a6 6 0 0 0 6-6v-13q0-.123-.007-.246M9 25H7.5A4.5 4.5 0 0 1 3 20.5V19h6zm8 0h-6v-6h6zm8-4.5a4.5 4.5 0 0 1-4.5 4.5H19v-6h6zM9 17H3v-6h6zm8 0h-6v-6h6zm8 0h-6v-6h6zM9 9H3V7.5A4.5 4.5 0 0 1 7.5 3H9zm8 0h-6V3h6zm3.5-6A4.5 4.5 0 0 1 25 7.5V9h-6V3z");
}
</style><path class="w3_922b-a"/>`,
		"fallback": "fluent:table-multiple-32-filled",
	});
}

export default Component;
