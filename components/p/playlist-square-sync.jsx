import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/b/b7kac3mnq.css';
import '../../css/h/httykj-ir.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="b7kac3mnq"/><path class="httykj-ir"/></g>`,
		"fallback": "streamline-freehand-color:playlist-square-sync",
	});
}

export default Component;
