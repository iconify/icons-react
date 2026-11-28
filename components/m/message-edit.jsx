import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/ahf8b4gpz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ahf8b4gpz"/>`,
		"fallback": "noviair-light:message-edit",
	});
}

export default Component;
