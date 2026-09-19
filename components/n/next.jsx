import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mdvy41q8u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mdvy41q8u"/>`,
		"fallback": "grommet-icons:next",
	});
}

export default Component;
