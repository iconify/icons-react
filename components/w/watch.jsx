import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/wdo-2ccwy.css';
import '../../css/x/xqxc9ub9u.css';
import '../../css/o/otk84v7nh.css';
import '../../css/x/xmv0ri_ca.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><circle class="wdo-2ccwy"/><path class="xqxc9ub9u"/><path class="otk84v7nh"/><path class="xmv0ri_ca"/></g>`,
		"fallback": "lets-icons:watch",
	});
}

export default Component;
