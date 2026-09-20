import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/abk1k7b-w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="abk1k7b-w"/>`,
		"fallback": "streamline-ultimate:shapes-bold",
	});
}

export default Component;
