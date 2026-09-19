import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tob-p7yon.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tob-p7yon"/>`,
		"fallback": "grommet-icons:internet-explorer",
	});
}

export default Component;
