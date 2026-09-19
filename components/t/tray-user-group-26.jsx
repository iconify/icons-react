import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ojleve2qp.css';

const viewBox = {"width":26,"height":26};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ojleve2qp"/>`,
		"fallback": "garden:tray-user-group-26",
	});
}

export default Component;
