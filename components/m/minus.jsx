import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fptu3rb-j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fptu3rb-j"/>`,
		"fallback": "griddy-icons:minus",
	});
}

export default Component;
