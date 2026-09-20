import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hrf7qsi7j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hrf7qsi7j"/>`,
		"fallback": "lets-icons:line-light",
	});
}

export default Component;
