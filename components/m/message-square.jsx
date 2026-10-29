import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gdrk782lf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gdrk782lf"/>`,
		"fallback": "withicons-bauhaus:message-square",
	});
}

export default Component;
