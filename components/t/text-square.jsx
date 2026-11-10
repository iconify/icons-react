import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/g/gf6-x9klf.css';
import '../../css/b/bqzzvbcko.css';
import '../../css/w/wircy1bob.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="gf6-x9klf"/><path class="bqzzvbcko"/><path class="wircy1bob"/></g>`,
		"fallback": "andrsrxn:text-square",
	});
}

export default Component;
