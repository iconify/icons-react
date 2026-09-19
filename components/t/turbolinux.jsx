import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ep5hu0tam.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ep5hu0tam"/>`,
		"fallback": "grommet-icons:turbolinux",
	});
}

export default Component;
