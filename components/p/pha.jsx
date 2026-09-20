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
		"content": `<style>.bk8yfrh6e {
  fill: var(--svg-color--d1ff52, #d1ff52);
  fill-rule: evenodd;
  d: path("M3 3h14.143v3.857H21V12h-3.857V6.857H6.857V12H3zm3.857 12.857h10.286V12H6.857zm0 0V21H3v-5.143z");
}
</style><path clip-rule="evenodd" class="bk8yfrh6e"/>`,
		"fallback": "token-branded:pha",
	});
}

export default Component;
