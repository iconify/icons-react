import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/ggsab6nmw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ggsab6nmw"/>`,
		"fallback": "boxicons:laurel-wreath-left-filled",
	});
}

export default Component;
