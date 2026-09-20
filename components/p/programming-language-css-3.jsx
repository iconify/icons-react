import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/s/s1fn8529h.css';
import '../../css/t/tfn_hpb1v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="s1fn8529h"/><path class="tfn_hpb1v"/></g>`,
		"fallback": "streamline-freehand-color:programming-language-css-3",
	});
}

export default Component;
