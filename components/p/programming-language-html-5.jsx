import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/w/wu1jvbbfw.css';
import '../../css/v/vhkiydbhu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="wu1jvbbfw"/><path class="vhkiydbhu"/></g>`,
		"fallback": "streamline-freehand-color:programming-language-html-5",
	});
}

export default Component;
