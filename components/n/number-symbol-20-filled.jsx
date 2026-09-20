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
		"content": `<style>.ch5gnftfs {
  fill: currentColor;
  d: path("M8.99 2.877a.75.75 0 0 0-1.48-.254l-.667 3.88l-3.093.001a.75.75 0 0 0 0 1.5l2.835-.001l-.688 3.996L2.75 12a.75.75 0 0 0 0 1.5h2.89l-.624 3.624a.75.75 0 1 0 1.478.254l.668-3.879l4.477-.002l-.625 3.627a.75.75 0 1 0 1.479.255l.668-3.883l3.094-.001a.75.75 0 0 0 0-1.5l-2.835.001L14.107 8l3.143-.001a.75.75 0 1 0 0-1.5l-2.885.001l.624-3.622a.75.75 0 0 0-1.478-.254L12.843 6.5l-4.478.002zm-.883 5.125L12.585 8l-.689 3.996l-4.477.002z");
}
</style><path class="ch5gnftfs"/>`,
		"fallback": "fluent:number-symbol-20-filled",
	});
}

export default Component;
