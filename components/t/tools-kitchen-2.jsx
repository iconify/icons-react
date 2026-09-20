import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i1-dhmbws.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="i1-dhmbws"/>`,
		"fallback": "tabler:tools-kitchen-2",
	});
}

export default Component;
