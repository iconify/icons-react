import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/f/fk35b6m6m.css';
import '../../css/g/gdyune7zi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="fk35b6m6m"/><path class="gdyune7zi"/></g>`,
		"fallback": "streamline-freehand-color:tags-double",
	});
}

export default Component;
