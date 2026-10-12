import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/wmn384rht.css';
import '../../css/c/c7y11bbmj.css';
import '../../css/f/fauxhqbxq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="wmn384rht"/><path class="c7y11bbmj"/><path class="fauxhqbxq"/></g>`,
		"fallback": "andrsrxn:mail-plus",
	});
}

export default Component;
