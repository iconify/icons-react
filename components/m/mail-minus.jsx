import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/u/u7vjzfbgj.css';
import '../../css/c/c7y11bbmj.css';
import '../../css/j/jugppdp1a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="u7vjzfbgj"/><path class="c7y11bbmj"/><path class="jugppdp1a"/></g>`,
		"fallback": "andrsrxn:mail-minus",
	});
}

export default Component;
