import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/v/vch52gryj.css';
import '../../css/w/wkpyxkb9o.css';
import '../../css/w/w31z-ubuz.css';
import '../../css/n/ntxd9m1mx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="vch52gryj"/><path class="wkpyxkb9o"/><path class="w31z-ubuz"/><path class="ntxd9m1mx"/></g>`,
		"fallback": "streamline-freehand-color:playlist-menu",
	});
}

export default Component;
