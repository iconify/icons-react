import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xvqgy2b5o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xvqgy2b5o"/>`,
		"fallback": "mdi-light:plus",
	});
}

export default Component;
