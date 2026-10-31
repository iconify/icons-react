import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n2h97cc7q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="n2h97cc7q"/>`,
		"fallback": "coolicons:trash-full-round",
	});
}

export default Component;
