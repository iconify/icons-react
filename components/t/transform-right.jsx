import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/n/nq7gakb6c.css';
import '../../css/b/bvsehuhap.css';
import '../../css/d/dfv0w4p5d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="nq7gakb6c"/><path class="bvsehuhap"/><path class="dfv0w4p5d"/></g>`,
		"fallback": "streamline-freehand-color:transform-right",
	});
}

export default Component;
