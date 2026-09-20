import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/j/j-wm-8r3v.css';
import '../../css/b/b34n1w8cn.css';
import '../../css/s/sslwlcb4r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="j-wm-8r3v"/><path class="b34n1w8cn"/><path class="sslwlcb4r"/></g>`,
		"fallback": "streamline-freehand-color:programming-language-browser-html",
	});
}

export default Component;
