import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/n6p55wb8r.css';
import '../../css/o/o9byuqfyt.css';
import '../../css/k/kxfr2ykpw.css';
import '../../css/h/h3wou-l2m.css';
import '../../css/k/kjr8mxb2p.css';
import '../../css/p/pgyzmr0in.css';
import '../../css/y/yyshzubnj.css';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><rect class="n6p55wb8r"/><path class="o9byuqfyt"/><path class="kxfr2ykpw"/><path class="h3wou-l2m"/><path class="kjr8mxb2p"/><path class="pgyzmr0in"/><path class="yyshzubnj"/></g>`,
		"fallback": "skill-icons:solidity",
	});
}

export default Component;
