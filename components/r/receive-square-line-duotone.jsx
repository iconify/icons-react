import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/p/prbf6mb6m.css';
import '../../css/c/c65obhuad.css';
import '../../css/l/lxnzn9nmw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="prbf6mb6m"/><path class="c65obhuad"/><path class="lxnzn9nmw"/></g>`,
		"fallback": "solar:receive-square-line-duotone",
	});
}

export default Component;
