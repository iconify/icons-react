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
		"content": `<style>.j681h_w8w {
  fill: currentColor;
  d: path("M6.616 14q-.667 0-1.141-.475T5 12.385V9.5q0-.213.144-.356T5.501 9t.356.144T6 9.5v2.885q0 .269.173.442t.443.173h10.769q.269 0 .442-.173t.173-.442V9.5q0-.213.144-.356T18.501 9t.356.144T19 9.5v2.885q0 .666-.475 1.14t-1.14.475z");
}
</style><path class="j681h_w8w"/>`,
		"fallback": "material-symbols-light:space-bar-outline-rounded",
	});
}

export default Component;
