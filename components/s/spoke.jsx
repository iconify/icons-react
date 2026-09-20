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
		"content": `<style>.pp1ko9e5r {
  fill: currentColor;
  d: path("M12 10q-1.237 0-2.119-.881T9 7t.881-2.119T12 4t2.119.881T15 7t-.881 2.119T12 10M7 20q-1.237 0-2.119-.881T4 17t.881-2.119T7 14t2.119.881T10 17t-.881 2.119T7 20m10 0q-1.237 0-2.119-.881T14 17t.881-2.119T17 14t2.119.881T20 17t-.881 2.119T17 20");
}
</style><path class="pp1ko9e5r"/>`,
		"fallback": "material-symbols-light:spoke",
	});
}

export default Component;
