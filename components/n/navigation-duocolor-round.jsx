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
		"content": `<style>.ptvi5kbkd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("m12 6l6 2c1.107.369.476 2.262-1 3l-2 1a6.7 6.7 0 0 0-3 3l-1 2c-.738 1.476-2.631 2.107-3 1L4 6c-.412-1.236.764-2.412 2-2z");
}
</style><path class="ptvi5kbkd"/>`,
		"fallback": "coolicons:navigation-duocolor-round",
	});
}

export default Component;
