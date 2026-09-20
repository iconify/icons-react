import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/g/gomj-qbdh.css';
import '../../css/d/du85i040j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="gomj-qbdh"/><path class="du85i040j"/></g>`,
		"fallback": "streamline-freehand-color:microprocessor-computer-chip-32-bit",
	});
}

export default Component;
