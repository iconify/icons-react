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
		"content": `<style>.r507gdb3p {
  fill: currentColor;
  d: path("M3 6a3 3 0 0 1 3-3h8a3 3 0 0 1 3 3zm0 1v6h14V7zm4.354 1.854l-.647.646h6.586l-.647-.646a.5.5 0 0 1 .708-.708l1.5 1.5a.5.5 0 0 1 0 .708l-1.5 1.5a.5.5 0 0 1-.708-.708l.647-.646H6.707l.647.646a.5.5 0 0 1-.708.708l-1.5-1.5a.5.5 0 0 1 0-.708l1.5-1.5a.5.5 0 1 1 .708.708M3 14h14a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3");
}
</style><path class="r507gdb3p"/>`,
		"fallback": "fluent:table-cells-merge-20-filled",
	});
}

export default Component;
