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
		"content": `<style>.fg2oa7b0y {
  fill: currentColor;
  d: path("M4.5 14q-.838 0-1.42-.58T2.5 12t.58-1.42T4.5 10q.698 0 1.237.425t.698 1.075H21.5v1H6.435q-.16.65-.698 1.075T4.5 14");
}
</style><path class="fg2oa7b0y"/>`,
		"fallback": "material-symbols-light:line-start-outline",
	});
}

export default Component;
