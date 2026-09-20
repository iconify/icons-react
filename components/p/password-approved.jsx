import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/q/qdwtkxt8i.css';
import '../../css/z/zi4e68bwj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="qdwtkxt8i"/><path class="zi4e68bwj"/></g>`,
		"fallback": "streamline-freehand:password-approved",
	});
}

export default Component;
