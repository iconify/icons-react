import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/w/wn_d6kbds.css';
import '../../css/b/bwr1rccot.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="wn_d6kbds"/><path class="bwr1rccot"/></g>`,
		"fallback": "streamline-freehand-color:safety-drown-hand",
	});
}

export default Component;
