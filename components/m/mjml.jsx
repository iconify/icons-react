import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bipk47jpq.css';
import '../../css/n/nw-_opefk.css';
import '../../css/r/rqml24bnx.css';
import '../../css/k/kslvnrg1u.css';
import '../../css/r/ron-s3gww.css';
import '../../css/o/oeo74dn0y.css';

const viewBox = {"width":120,"height":120};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g transform="translate(9.943 14.253)scale(.8026)"><path class="bipk47jpq"/><ellipse class="nw-_opefk"/><path class="rqml24bnx"/><path class="kslvnrg1u"/><path class="ron-s3gww"/><ellipse class="oeo74dn0y"/></g>`,
		"fallback": "material-icon-theme:mjml",
	});
}

export default Component;
