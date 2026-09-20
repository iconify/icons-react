import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/y/yxdm9ebju.css';
import '../../css/n/n3glhibmj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="yxdm9ebju"/><path class="n3glhibmj"/></g>`,
		"fallback": "streamline-freehand-color:transfer-pictures-laptop-smartphone",
	});
}

export default Component;
