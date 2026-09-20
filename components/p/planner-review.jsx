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
		"content": `<style>.n8c0ycbxn {
  fill: currentColor;
  d: path("M12 22L9 7.95L6.8 18H2v-2h3.2L8.025 3H10l3.05 14.3L15 9h2l1.8 7H22v2h-4.75l-1.2-4.7L14 22z");
}
</style><path class="n8c0ycbxn"/>`,
		"fallback": "material-symbols:planner-review",
	});
}

export default Component;
