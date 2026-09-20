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
		"content": `<style>.csmfzh7xg {
  fill: currentColor;
  d: path("M4.616 19q-.691 0-1.153-.462T3 17.384V6.616q0-.691.463-1.153T4.615 5h14.77q.69 0 1.152.463T21 6.616v10.769q0 .69-.463 1.153T19.385 19zM4 17.185l12.185-3.212L14.119 6H4.616q-.231 0-.424.192T4 6.616zm.817.815h14.568q.23 0 .423-.192t.192-.424V6.616q0-.231-.192-.424T19.385 6h-4.23l2.249 8.692zM4 6");
}
</style><path class="csmfzh7xg"/>`,
		"fallback": "material-symbols-light:transition-chop-outline",
	});
}

export default Component;
