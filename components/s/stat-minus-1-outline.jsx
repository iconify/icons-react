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
		"content": `<style>.iyr6bob_l {
  fill: currentColor;
  d: path("M12 14.702L6.692 9.394l.708-.707L12 13.28l4.6-4.594l.708.707z");
}
</style><path class="iyr6bob_l"/>`,
		"fallback": "material-symbols-light:stat-minus-1-outline",
	});
}

export default Component;
