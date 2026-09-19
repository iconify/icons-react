import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bjv7a_47d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bjv7a_47d"/>`,
		"fallback": "boxicons:tag-x-filled",
	});
}

export default Component;
