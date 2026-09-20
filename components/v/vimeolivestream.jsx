import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/curl4d8tr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="curl4d8tr"/>`,
		"fallback": "simple-icons:vimeolivestream",
	});
}

export default Component;
