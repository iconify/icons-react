import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/x/x0ambq6_r.css';
import '../../css/w/wsun1abzw.css';
import '../../css/l/levp3rh9q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="x0ambq6_r"/><path class="wsun1abzw"/><path class="levp3rh9q"/></g>`,
		"fallback": "streamline-freehand:programming-language-script-lock",
	});
}

export default Component;
