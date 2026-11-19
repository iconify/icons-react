import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/o/olqhhhpbo.css';
import '../../css/j/j6dc850ik.css';
import '../../css/b/by6n-xb9g.css';
import '../../css/s/svvqsyw5n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="olqhhhpbo"/><path class="j6dc850ik"/><path class="by6n-xb9g"/><path class="svvqsyw5n"/></g>`,
		"fallback": "andrsrxn:keyboard-signal",
	});
}

export default Component;
