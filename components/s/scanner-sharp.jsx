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
		"content": `<style>.w7_kqccjk {
  fill: currentColor;
  d: path("M17.6 12L3.5 6.9L4.2 5L21 11.15V20H3v-8zM10 17h8v-2h-8zm-4 0h2v-2H6z");
}
</style><path class="w7_kqccjk"/>`,
		"fallback": "material-symbols:scanner-sharp",
	});
}

export default Component;
