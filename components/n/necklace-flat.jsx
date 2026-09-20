import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/p4bi4503y.css';
import '../../css/v/vyutb6bxv.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="p4bi4503y"/><path class="vyutb6bxv"/></g>`,
		"fallback": "streamline-color:necklace-flat",
	});
}

export default Component;
