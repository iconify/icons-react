import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/j/jxkvsmhic.css';
import '../../css/n/nklgvxi4m.css';
import '../../css/n/n91aw11bs.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="jxkvsmhic"/><path class="nklgvxi4m"/><path class="n91aw11bs"/></g>`,
		"fallback": "andrsrxn:megaphone",
	});
}

export default Component;
