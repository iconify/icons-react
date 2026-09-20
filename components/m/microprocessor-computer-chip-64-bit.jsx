import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/l/lh0p9be3p.css';
import '../../css/w/wjt9yrbue.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="lh0p9be3p"/><path class="wjt9yrbue"/></g>`,
		"fallback": "streamline-freehand-color:microprocessor-computer-chip-64-bit",
	});
}

export default Component;
