import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.t29y70bka {
  fill: currentColor;
  d: path("M13.5 14a.5.5 0 0 0 0-1h-11a.5.5 0 0 0 0 1zM5 10H2.5a.5.5 0 0 1-.5-.5V6h3zm9-.5a.5.5 0 0 1-.5.5H11V6h3zM10 6v2.585a1.5 1.5 0 0 0-.5-.085a1.5 1.5 0 1 0-3 0q-.257 0-.5.085V6zm1-1h3v-.5A2.5 2.5 0 0 0 11.5 2H11zM6 2v3h4V2zM4.5 2H5v3H2v-.5A2.5 2.5 0 0 1 4.5 2m1.646 7.646a.5.5 0 0 1 .708 0l.646.647V8.5a.5.5 0 0 1 1 0v1.793l.646-.647a.5.5 0 1 1 .708.708l-1.5 1.5a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 0 1 0-.708");
}
</style><path class="t29y70bka"/>`,
		"fallback": "fluent:table-move-below-16-filled",
	});
}

export default Component;
