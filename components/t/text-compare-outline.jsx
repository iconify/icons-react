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
		"content": `<style>.vf25bgbxs {
  fill: currentColor;
  d: path("M11 22.23V20H5.616q-.691 0-1.153-.462T4 18.384V5.616q0-.691.463-1.153T5.616 4H11V1.77h1v20.46zM5.616 19H11v-3H7.5v-1H11v-2.5H7.5v-1H11V9H7.5V8H11V5H5.616q-.231 0-.424.192T5 5.616v12.769q0 .23.192.423t.423.192m8.577-14V4h4.385q.69 0 1.153.463t.462 1.153v12.769q0 .69-.462 1.153T18.577 20h-4.385v-1h4.385q.23 0 .423-.192t.192-.424V5.616q0-.231-.192-.424T18.577 5zm0 7.5v-1h3.5v1zm0-3.5V8h3.5v1zM11 12");
}
</style><path class="vf25bgbxs"/>`,
		"fallback": "material-symbols-light:text-compare-outline",
	});
}

export default Component;
