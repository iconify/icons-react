import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/ixyjo662n.css';
import '../../css/b/bg5ofv52z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="ixyjo662n"/><path class="bg5ofv52z"/></g>`,
		"fallback": "andrsrxn:margin-bottom",
	});
}

export default Component;
