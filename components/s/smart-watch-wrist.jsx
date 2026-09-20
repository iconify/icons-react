import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/a/ae85lnhzi.css';
import '../../css/w/wzpm1injt.css';
import '../../css/b/bzgxe9e7l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="ae85lnhzi"/><path class="wzpm1injt"/><path class="bzgxe9e7l"/></g>`,
		"fallback": "streamline-freehand-color:smart-watch-wrist",
	});
}

export default Component;
