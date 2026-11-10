import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/q/qkhukzbgd.css';
import '../../css/r/rai-dfa_u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="qkhukzbgd"/><path class="rai-dfa_u"/></g>`,
		"fallback": "andrsrxn:mirror-right",
	});
}

export default Component;
