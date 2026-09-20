import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/i/id-k4fb-j.css';
import '../../css/z/zq6oz2hma.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="id-k4fb-j"/><path class="zq6oz2hma"/></g>`,
		"fallback": "streamline-freehand-color:loading-spinning-star",
	});
}

export default Component;
