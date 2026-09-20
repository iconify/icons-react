import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/w/w38rf6wii.css';
import '../../css/i/i9irkobgy.css';
import '../../css/d/dtgkxxb5c.css';
import '../../css/z/zgfhzacin.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="w38rf6wii"/><path class="i9irkobgy"/><path class="dtgkxxb5c"/><path class="zgfhzacin"/></g>`,
		"fallback": "streamline-freehand-color:lock-network",
	});
}

export default Component;
