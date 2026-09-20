import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/x/xx8uc8bgh.css';
import '../../css/j/jvgwolb2i.css';
import '../../css/m/maqr8cuyf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="xx8uc8bgh"/><path class="jvgwolb2i"/><path class="maqr8cuyf"/></g>`,
		"fallback": "streamline-freehand-color:tablet-application",
	});
}

export default Component;
