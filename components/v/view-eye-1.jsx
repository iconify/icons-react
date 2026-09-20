import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/k/ksie78ywj.css';
import '../../css/c/c4v8ct2zj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="ksie78ywj"/><path class="c4v8ct2zj"/></g>`,
		"fallback": "streamline-freehand-color:view-eye-1",
	});
}

export default Component;
