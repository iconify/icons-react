import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/n/ne9whfbid.css';
import '../../css/f/fnzkjf6tn.css';
import '../../css/t/tv4babcjz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="ne9whfbid"/><path class="fnzkjf6tn"/><path class="tv4babcjz"/></g>`,
		"fallback": "streamline-freehand-color:text-formating-eraser-2",
	});
}

export default Component;
