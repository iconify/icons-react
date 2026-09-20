import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/x/xmgcshbut.css';
import '../../css/o/o8kjulbgu.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="xmgcshbut"/><path class="o8kjulbgu"/></g>`,
		"fallback": "streamline-color:volcano-flat",
	});
}

export default Component;
