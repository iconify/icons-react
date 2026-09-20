import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/x/x9xer61ny.css';
import '../../css/d/dp0zwgbbl.css';
import '../../css/w/wuyzb9bxj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="x9xer61ny"/><path class="dp0zwgbbl"/><path class="wuyzb9bxj"/></g>`,
		"fallback": "streamline-freehand-color:transfer-pictures-smartphone",
	});
}

export default Component;
