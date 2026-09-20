import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/odk0v22_n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="odk0v22_n"/>`,
		"fallback": "tabler:pill-filled",
	});
}

export default Component;
