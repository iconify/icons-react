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
		"content": `<style>.hr9cz1jdy {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M3 9h18v12H3Zm14 4v4M6 9V5a2 2 0 1 1 4 0v4m4 0V5a2 2 0 1 1 4 0v4");
}
</style><path class="hr9cz1jdy"/>`,
		"fallback": "coolicons:toaster-sharp",
	});
}

export default Component;
