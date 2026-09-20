import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q5r39ybsn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="q5r39ybsn"/>`,
		"fallback": "streamline-ultimate:panoramic-bold",
	});
}

export default Component;
