import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/idq7vmc7h.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="idq7vmc7h"/>`,
		"fallback": "streamline:interface-edit-glue-glue-company-office-supplies-work",
	});
}

export default Component;
