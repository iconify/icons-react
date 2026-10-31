import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h6nqkob6d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h6nqkob6d"/>`,
		"fallback": "coolicons:note-download-corner-fill-round",
	});
}

export default Component;
