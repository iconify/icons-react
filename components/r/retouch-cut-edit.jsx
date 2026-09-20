import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/x/xd424yelu.css';
import '../../css/d/d8xjnkbxa.css';
import '../../css/w/wwkxdntgn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="xd424yelu"/><path class="d8xjnkbxa"/><path class="wwkxdntgn"/></g>`,
		"fallback": "streamline-freehand-color:retouch-cut-edit",
	});
}

export default Component;
