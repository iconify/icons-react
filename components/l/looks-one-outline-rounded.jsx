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
		"content": `<style>.tdw_fib1u {
  fill: currentColor;
  d: path("M12.5 8.5V16q0 .214.143.357T13 16.5t.357-.143T13.5 16V8.308q0-.348-.23-.578t-.578-.23H11q-.213 0-.357.143T10.5 8t.143.357T11 8.5zM5.616 20q-.691 0-1.153-.462T4 18.384V5.616q0-.691.463-1.153T5.616 4h12.769q.69 0 1.153.463T20 5.616v12.769q0 .69-.462 1.153T18.384 20zm0-1h12.769q.23 0 .423-.192t.192-.424V5.616q0-.231-.192-.424T18.384 5H5.616q-.231 0-.424.192T5 5.616v12.769q0 .23.192.423t.423.192M5 5v14z");
}
</style><path class="tdw_fib1u"/>`,
		"fallback": "material-symbols-light:looks-one-outline-rounded",
	});
}

export default Component;
