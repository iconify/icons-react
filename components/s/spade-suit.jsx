import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":64,"height":64};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.y6qbvtb9w {
  fill: currentColor;
  d: path("M62 32.938C62 18.471 32 2 32 2S2 18.471 2 32.938c0 8.576 7.226 15.938 15.938 15.938c4.193 0 7.925-1.617 10.702-4.242l-.39 3.305c-.504 3.589-2.992 6.872-6.563 7.5L17 56.375V62h30v-5.625l-4.688-.938c-3.569-.628-6.058-3.909-6.563-7.5l-.388-3.305c2.775 2.627 6.507 4.242 10.7 4.242C54.774 48.875 62 41.514 62 32.938");
}
</style><path class="y6qbvtb9w"/>`,
		"fallback": "emojione-monotone:spade-suit",
	});
}

export default Component;
