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
		"content": `<style>.fish9kycm {
  fill: currentColor;
  d: path("M16.242 13.229q-.176-.085-.248-.295q-.071-.211.014-.388q.117-.236.162-.5q.046-.265.076-.532q.043-.214.186-.364t.357-.15t.353.166q.14.165.13.378q-.037.364-.11.731q-.071.367-.237.694q-.084.197-.285.27t-.398-.01M11.29 3q.846 0 1.423.577T13.289 5v3.75q0 .25-.16.375q-.158.125-.34.125t-.342-.128t-.158-.378V5q0-.425-.288-.712T11.289 4t-.713.287t-.287.713v.712q0 .25-.16.375q-.158.125-.34.125t-.342-.128t-.158-.378V5q0-.846.577-1.423Q10.442 3 11.289 3m-.5 17v-3.017q-2.166-.185-3.717-1.717q-1.55-1.531-1.747-3.741q-.03-.213.11-.37q.14-.155.354-.155t.359.153t.183.366q.196 1.929 1.619 3.205T11.289 16q1.08 0 2.016-.426t1.618-1.17l.714.713q-.725.787-1.713 1.283t-2.135.583V20q0 .214-.144.357t-.356.143t-.357-.143t-.143-.357m8.792.477L2.31 3.207q-.14-.14-.15-.343t.15-.364t.354-.16t.354.16l17.27 17.27q.14.14.15.344t-.15.363t-.355.16t-.353-.16");
}
</style><path class="fish9kycm"/>`,
		"fallback": "material-symbols-light:mic-off-outline-rounded",
	});
}

export default Component;
