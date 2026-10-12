import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/iypovc5ux.css';
import '../../css/f/f75su9_fr.css';
import '../../css/s/sc6wphleq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="iypovc5ux"/><path class="f75su9_fr"/><path class="sc6wphleq"/></g>`,
		"fallback": "andrsrxn:store",
	});
}

export default Component;
