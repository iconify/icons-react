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
		"content": `<style>.eg356u0bo {
  fill: currentColor;
  d: path("M22 6H12l-2-2H2v16h20zm-7 3c1.1 0 2 .9 2 2s-.9 2-2 2s-2-.9-2-2s.9-2 2-2m4 8h-8v-1c0-1.33 2.67-2 4-2s4 .67 4 2z");
}
</style><path class="eg356u0bo"/>`,
		"fallback": "ic:sharp-folder-shared",
	});
}

export default Component;
