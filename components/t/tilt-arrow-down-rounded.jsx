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
		"content": `<style>.c0zbkzbpa {
  fill: currentColor;
  d: path("M6.616 20q-.691 0-1.153-.462T5 18.384V5.616q0-.691.463-1.153T6.616 4h10.788q.69 0 1.153.463t.462 1.153v12.769q0 .69-.462 1.153T17.404 20zm4.903-6.536l-1.765-1.766q-.14-.14-.341-.15q-.202-.01-.367.156q-.16.16-.16.354t.16.353l2.408 2.408q.242.242.565.242t.565-.242l2.37-2.369q.14-.14.15-.341t-.15-.367q-.166-.165-.357-.165t-.357.165l-1.72 1.721V9.27q0-.213-.144-.357t-.357-.143t-.357.143t-.143.357z");
}
</style><path class="c0zbkzbpa"/>`,
		"fallback": "material-symbols-light:tilt-arrow-down-rounded",
	});
}

export default Component;
