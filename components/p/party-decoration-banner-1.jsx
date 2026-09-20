import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/m/mss9cccos.css';
import '../../css/o/o__nwctrb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="mss9cccos"/><path class="o__nwctrb"/></g>`,
		"fallback": "streamline-freehand-color:party-decoration-banner-1",
	});
}

export default Component;
