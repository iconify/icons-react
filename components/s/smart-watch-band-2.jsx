import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/o/o8d3a8mam.css';
import '../../css/m/mgp8rwo5i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="o8d3a8mam"/><path class="mgp8rwo5i"/></g>`,
		"fallback": "streamline-freehand-color:smart-watch-band-2",
	});
}

export default Component;
