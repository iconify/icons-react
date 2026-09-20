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
		"content": `<style>.f552yc-ri {
  fill: currentColor;
  d: path("M4.616 19q-.691 0-1.153-.462T3 17.384V6.616q0-.691.463-1.153T4.615 5h14.77q.69 0 1.152.463T21 6.616v10.769q0 .69-.463 1.153T19.385 19zm0-1h14.769q.23 0 .423-.192t.192-.424V6.616q0-.231-.192-.424T19.385 6H4.615q-.23 0-.423.192T4 6.616v10.769q0 .23.192.423t.423.192m4.347-3.154h6.077q.348 0 .577-.23q.23-.23.23-.577V9.962q0-.348-.23-.578t-.577-.23H8.96q-.348 0-.577.23q-.23.23-.23.578v4.077q0 .348.23.577q.23.23.577.23M4 18V6z");
}
</style><path class="f552yc-ri"/>`,
		"fallback": "material-symbols-light:picture-in-picture-center-outline-rounded",
	});
}

export default Component;
