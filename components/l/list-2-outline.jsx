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
		"content": `<style>.c2drsmbzt {
  fill: currentColor;
  d: path("M7.75 17v-1h8.5v1zM4 12.5v-1h16v1zM7.75 8V7h8.5v1z");
}
</style><path class="c2drsmbzt"/>`,
		"fallback": "material-symbols-light:list-2-outline",
	});
}

export default Component;
