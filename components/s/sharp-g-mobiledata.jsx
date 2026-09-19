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
		"content": `<style>.asosj7d7h {
  fill: currentColor;
  d: path("M12 11v2h2v2H9V9h7V7H7v10h9v-6z");
}
</style><path class="asosj7d7h"/>`,
		"fallback": "ic:sharp-g-mobiledata",
	});
}

export default Component;
