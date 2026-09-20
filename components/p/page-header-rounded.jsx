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
		"content": `<style>.nwz4kbbim {
  fill: currentColor;
  d: path("M4.5 5q-.213 0-.357-.143T4 4.5t.143-.357T4.5 4h15q.214 0 .357.143T20 4.5t-.143.357T19.5 5zm13.885 2.385q.69 0 1.153.462T20 9v9.385q0 .69-.462 1.153T18.384 20H5.616q-.691 0-1.153-.462T4 18.384V9q0-.69.463-1.153t1.153-.463z");
}
</style><path class="nwz4kbbim"/>`,
		"fallback": "material-symbols-light:page-header-rounded",
	});
}

export default Component;
