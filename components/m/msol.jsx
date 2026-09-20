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
		"content": `<style>.atra3acul {
  fill: var(--svg-color--308d8a, #308d8a);
  fill-rule: evenodd;
  d: path("M6.177 5.647H21l-3.706 3.177H3.001zm.001 9.53h14.293l-3.165 3.176H3zm11.116-4.765L3 10.415l3.178 3.173h14.293z");
}
</style><path clip-rule="evenodd" class="atra3acul"/>`,
		"fallback": "token-branded:msol",
	});
}

export default Component;
