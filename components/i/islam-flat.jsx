import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/a/au6mt253t.css';
import '../../css/i/i81ar_yjp.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="au6mt253t"/><path class="i81ar_yjp"/></g>`,
		"fallback": "streamline-color:islam-flat",
	});
}

export default Component;
