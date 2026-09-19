import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y36z6v4nt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="y36z6v4nt"/>`,
		"fallback": "cbi:mainsail",
	});
}

export default Component;
