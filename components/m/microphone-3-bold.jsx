import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/f/fad3aejgb.css';
import '../../css/z/zjn4cgqic.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="fad3aejgb"/><path class="zjn4cgqic"/></g>`,
		"fallback": "solar:microphone-3-bold",
	});
}

export default Component;
