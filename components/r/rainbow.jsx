import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xzla5f-tc.css';
import '../../css/g/gw3y6so7m.css';
import '../../css/n/noxr8smkm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xzla5f-tc"/><path class="gw3y6so7m"/><path class="noxr8smkm"/>`,
		"fallback": "token:rainbow",
	});
}

export default Component;
