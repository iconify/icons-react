import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gi8c8mbrv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gi8c8mbrv"/>`,
		"fallback": "tabler:square-rounded-letter-p-filled",
	});
}

export default Component;
