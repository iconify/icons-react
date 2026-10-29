import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t222qp1dw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t222qp1dw"/>`,
		"fallback": "withicons-bauhaus:message-circle",
	});
}

export default Component;
