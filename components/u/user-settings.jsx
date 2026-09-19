import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xduf9kbuf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xduf9kbuf"/>`,
		"fallback": "grommet-icons:user-settings",
	});
}

export default Component;
