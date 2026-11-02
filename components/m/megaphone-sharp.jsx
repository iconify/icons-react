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
		"content": `<style>.js04lv96o {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("m11 8l10-5v16l-10-5zm0 0H3v6h8m-6 0v7h4v-7");
}
</style><path class="js04lv96o"/>`,
		"fallback": "coolicons:megaphone-sharp",
	});
}

export default Component;
