import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/y/yf85lrfdg.css';
import '../../css/o/othbtsbmg.css';
import '../../css/y/ywoivubqj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="yf85lrfdg"/><path class="othbtsbmg"/><path class="ywoivubqj"/></g>`,
		"fallback": "streamline-freehand-color:office-stamp-document",
	});
}

export default Component;
