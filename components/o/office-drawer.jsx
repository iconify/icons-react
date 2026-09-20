import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wmot60bat.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wmot60bat"/>`,
		"fallback": "streamline-ultimate:office-drawer",
	});
}

export default Component;
