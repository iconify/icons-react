import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/u/ugaljkxxq.css';
import '../../css/r/rtwk713ua.css';
import '../../css/g/g5qchsf3q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="ugaljkxxq"/><path class="rtwk713ua"/><path class="g5qchsf3q"/></g>`,
		"fallback": "streamline-freehand-color:phone-selfie-front",
	});
}

export default Component;
