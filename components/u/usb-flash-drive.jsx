import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l3xtuk_0z.css';
import '../../css/s/sc__xls2a.css';
import '../../css/n/nqxh0acwc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="l3xtuk_0z"><path class="sc__xls2a"/><path class="nqxh0acwc"/></g>`,
		"fallback": "streamline-cyber:usb-flash-drive",
	});
}

export default Component;
