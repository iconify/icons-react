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
		"content": `<style>.kwo9mmu7l {
  fill: currentColor;
  d: path("M22 13v5h-5l1 1v2H6v-2l1-1H2V3h10v2H4v11h16v-3zm-7 2l-5-5h4V3h2v7h4z");
}
</style><path class="kwo9mmu7l"/>`,
		"fallback": "ic:sharp-browser-updated",
	});
}

export default Component;
