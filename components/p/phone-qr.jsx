import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/yxdcyqb2j.css';
import '../../css/w/w9qv6abzt.css';
import '../../css/y/yngktqmfb.css';
import '../../css/o/oj8ptcbxd.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="yxdcyqb2j"/><path class="w9qv6abzt"/><path class="yngktqmfb"/><path class="oj8ptcbxd"/></g>`,
		"fallback": "streamline-flex-color:phone-qr",
	});
}

export default Component;
