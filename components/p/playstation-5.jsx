import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sknnvw58m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sknnvw58m"/>`,
		"fallback": "cbi:playstation-5",
	});
}

export default Component;
