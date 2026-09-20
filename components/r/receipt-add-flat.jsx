import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/n4a06hbrq.css';
import '../../css/o/ou9miccvu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="n4a06hbrq"/><path clip-rule="evenodd" class="ou9miccvu"/></g>`,
		"fallback": "streamline-sharp-color:receipt-add-flat",
	});
}

export default Component;
