import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pck6pgbpl.css';
import '../../css/v/vh5zprbhd.css';
import '../../css/n/nf8po2uuu.css';
import '../../css/x/x2bo9tb4z.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pck6pgbpl"/><path class="vh5zprbhd"/><path class="nf8po2uuu"/><path class="x2bo9tb4z"/>`,
		"fallback": "ant-design:switcher-twotone",
	});
}

export default Component;
