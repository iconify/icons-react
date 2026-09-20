import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e2p4jstsh.css';
import '../../css/p/pnk4zvh1a.css';
import '../../css/z/zo_r92r9m.css';
import '../../css/v/vmps3nbgs.css';
import '../../css/n/nnt69vf-u.css';
import '../../css/f/fjma1lbsh.css';
import '../../css/c/cqb__ib5o.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="e2p4jstsh"/><path class="pnk4zvh1a"/><path class="zo_r92r9m"/><path class="vmps3nbgs"/><path class="nnt69vf-u"/><path class="fjma1lbsh"/><path class="cqb__ib5o"/>`,
		"fallback": "selfhst:vikunja",
	});
}

export default Component;
