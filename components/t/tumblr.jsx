import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tg3a7lbqv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tg3a7lbqv"/>`,
		"fallback": "grommet-icons:tumblr",
	});
}

export default Component;
