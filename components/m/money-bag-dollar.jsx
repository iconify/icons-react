import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/o/od3mmbn9b.css';
import '../../css/a/a_5ukwb1c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="od3mmbn9b"/><path class="a_5ukwb1c"/></g>`,
		"fallback": "streamline-freehand-color:money-bag-dollar",
	});
}

export default Component;
