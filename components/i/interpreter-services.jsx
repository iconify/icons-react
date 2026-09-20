import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i8smtgk6n.css';

const viewBox = {"width":64,"height":64};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="i8smtgk6n"/>`,
		"fallback": "medical-icon:interpreter-services",
	});
}

export default Component;
