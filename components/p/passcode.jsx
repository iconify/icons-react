import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/e/e4yz11bdb.css';
import '../../css/c/c2wwedy2m.css';
import '../../css/s/s5vedeh0e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="e4yz11bdb"/><path class="c2wwedy2m"/><path class="s5vedeh0e"/></g>`,
		"fallback": "andrsrxn:passcode",
	});
}

export default Component;
