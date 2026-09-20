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
		"content": `<style>.juqgsgw1a {
  fill: currentColor;
  d: path("M2.964 17.077q0-.194.17-.365l5.307-5.306q.459-.46 1.136-.46t1.137.46l2.401 2.402q.193.192.462.183q.27-.01.442-.222l6.208-7.128q.14-.172.338-.172q.197 0 .362.147q.14.14.153.325q.012.186-.128.351l-6.206 7.166q-.46.534-1.155.562q-.697.028-1.206-.482l-2.366-2.365Q9.846 12 9.577 12t-.442.173l-5.27 5.27q-.151.151-.355.16t-.375-.16t-.171-.366");
}
</style><path class="juqgsgw1a"/>`,
		"fallback": "material-symbols-light:show-chart-outline-rounded",
	});
}

export default Component;
