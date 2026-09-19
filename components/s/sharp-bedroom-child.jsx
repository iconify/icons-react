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
		"content": `<style>.b21jgq7lu {
  fill: currentColor;
  d: path("M9 8.5h6v2H9zM7.51 12h9v2h-9z");
}

.cr9qfdcye {
  fill: currentColor;
  d: path("M22 2H2v20h20zm-4 15h-1.5v-1.5h-9V17H6v-6.32l1.5-.01V7h9v3.67H18z");
}
</style><path class="b21jgq7lu"/><path class="cr9qfdcye"/>`,
		"fallback": "ic:sharp-bedroom-child",
	});
}

export default Component;
