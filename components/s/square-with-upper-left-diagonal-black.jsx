import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uykdrio-p.css';
import '../../css/f/f44stdb-u.css';
import '../../css/b/brzn_0bpr.css';
import '../../css/m/mehba9vbc.css';
import '../../css/i/ir-4gvm9i.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uykdrio-p"/><path class="f44stdb-u"/><g class="brzn_0bpr"><path class="mehba9vbc"/><path class="ir-4gvm9i"/></g>`,
		"fallback": "openmoji:square-with-upper-left-diagonal-black",
	});
}

export default Component;
