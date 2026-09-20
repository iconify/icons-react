import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/u/urg937b7y.css';
import '../../css/t/teu8itboh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="urg937b7y"/><path class="teu8itboh"/></g>`,
		"fallback": "streamline-freehand-color:saving-bank-international",
	});
}

export default Component;
