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
		"content": `<style>.nvzvrnbob {
  fill: currentColor;
  d: path("M3.385 18q-.69 0-1.153-.462t-.463-1.153v-8.77q0-.69.463-1.152T3.384 6h8.77q.69 0 1.153.463t.462 1.153v8.769q0 .69-.462 1.153T12.154 18zm0-1h8.769q.23 0 .423-.192q.192-.193.192-.424V7.616q0-.231-.192-.424T12.154 7h-8.77q-.23 0-.422.192t-.193.423v8.77q0 .23.193.423t.423.192M17 18V6h1v12zm4.23 0V6h1v12zM2.77 17V7z");
}
</style><path class="nvzvrnbob"/>`,
		"fallback": "material-symbols-light:overview-key-outline",
	});
}

export default Component;
