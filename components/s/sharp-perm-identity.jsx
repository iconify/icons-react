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
		"content": `<style>.l-n9s6bcw {
  fill: currentColor;
  d: path("M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4s-4 1.79-4 4s1.79 4 4 4m0-6c1.1 0 2 .9 2 2s-.9 2-2 2s-2-.9-2-2s.9-2 2-2m0 7c-2.67 0-8 1.34-8 4v3h16v-3c0-2.66-5.33-4-8-4m6 5H6v-.99c.2-.72 3.3-2.01 6-2.01s5.8 1.29 6 2z");
}
</style><path class="l-n9s6bcw"/>`,
		"fallback": "ic:sharp-perm-identity",
	});
}

export default Component;
