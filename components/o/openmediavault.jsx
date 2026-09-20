import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lem6pvbdv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lem6pvbdv"/>`,
		"fallback": "thesvg-color:openmediavault",
	});
}

export default Component;
