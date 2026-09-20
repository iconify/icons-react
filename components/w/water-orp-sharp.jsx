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
		"content": `<style>.zbh06acgw {
  fill: currentColor;
  d: path("M6.808 21v-5.384h3.884V21zm.884-.885h2.116V16.5H7.692zm4.616.885v-5.384h4.384v3.361h-1.034l.88 2.023h-.942l-.85-2h-1.554v2zm6 0v-5.384h4.384V19h-3.5v2zm-5.116-2.884h2.616V16.5h-2.616zm6 0h2.616V16.5h-2.616zm-14.384.58q-.848-.952-1.328-2.193T3 13.8q0-2.154 1.738-4.765T10 3.308q3.429 3.04 5.166 5.583T17 13.57v.046H4.808z");
}
</style><path class="zbh06acgw"/>`,
		"fallback": "material-symbols-light:water-orp-sharp",
	});
}

export default Component;
