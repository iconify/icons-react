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
		"content": `<style>.syi_lqbix {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 3H11v18H2.5Zm13 12.5a2.5 2.5 0 1 0 5 0a2.5 2.5 0 1 0-5 0ZM5.5 18H8m7.375-7.047a5.25 5.25 0 0 1 5.25 0M14 8.572a8 8 0 0 1 8 0");
}
</style><path class="syi_lqbix"/>`,
		"fallback": "uix-sharp:nfc-tag-sign",
	});
}

export default Component;
