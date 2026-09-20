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
		"content": `<style>.u2btdlb-b {
  fill: var(--svg-color--0057ff, #0057ff);
  d: path("M18.194 12.005a6.187 6.187 0 0 1-8.747 5.636a1.1 1.1 0 0 0-.528-.112c-1.277.084-2.42.607-3.089 1.024a9 9 0 1 0-.562-.58a3.43 3.43 0 0 0 1.21-3.026a1.1 1.1 0 0 0-.102-.371a6.188 6.188 0 1 1 11.818-2.57");
}
</style><path class="u2btdlb-b"/>`,
		"fallback": "token-branded:ox",
	});
}

export default Component;
