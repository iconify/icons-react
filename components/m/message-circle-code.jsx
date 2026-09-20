import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hlbxqhbgf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hlbxqhbgf"/>`,
		"fallback": "tabler:message-circle-code",
	});
}

export default Component;
