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
		"content": `<style>.yma1wqbde {
  fill: currentColor;
  d: path("M26.493 7.254A4.5 4.5 0 0 1 28.5 11v9.5a8 8 0 0 1-8 8H11a4.5 4.5 0 0 1-3.746-2.007q.123.006.246.007h13a6 6 0 0 0 6-6v-13q0-.123-.007-.246M20.5 3A4.5 4.5 0 0 1 25 7.5v13a4.5 4.5 0 0 1-4.5 4.5h-13A4.5 4.5 0 0 1 3 20.5v-13A4.5 4.5 0 0 1 7.5 3zM5 18v2.5A2.5 2.5 0 0 0 7.5 23H10v-5zm7 0v5h4v-5zm6 0v5h2.5a2.5 2.5 0 0 0 2.5-2.5V18zM5 12v4h5v-4zm7 0v4h4v-4zm6 0v4h5v-4zM7.5 5A2.5 2.5 0 0 0 5 7.5V10h5V5zm4.5 5h4V5h-4zm6 0h5V7.5A2.5 2.5 0 0 0 20.5 5H18z");
}
</style><path class="yma1wqbde"/>`,
		"fallback": "fluent:table-multiple-32-regular",
	});
}

export default Component;
