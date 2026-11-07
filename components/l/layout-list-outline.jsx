import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ujdmdsb_o.css';
import '../../css/t/tqse9w-kx.css';
import '../../css/f/fs4ndldwl.css';
import '../../css/a/a_1t3hbel.css';
import '../../css/d/dopjkpnvn.css';
import '../../css/q/qjl41kbvv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="ujdmdsb_o"/><path class="tqse9w-kx"/><path class="fs4ndldwl"/><path clip-rule="evenodd" class="a_1t3hbel"/><path class="dopjkpnvn"/><path class="qjl41kbvv"/>`,
		"fallback": "solar:layout-list-outline",
	});
}

export default Component;
