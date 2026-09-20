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
		"content": `<style>.b305n0b_b {
  fill: currentColor;
  d: path("M2 20v-4h2v4zm3 0v-4h4l.85-1.95l1.6 3.5l-1.1 2.45zm15 0v-4h2v4zm-1 0h-5.35L6.35 4H9.7L12 9.2L14.3 4h3.35l-4.05 8.85L15 16h4z");
}
</style><path class="b305n0b_b"/>`,
		"fallback": "material-symbols:sports-hockey-outline-sharp",
	});
}

export default Component;
