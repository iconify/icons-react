import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y82uu8bfw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="y82uu8bfw"/>`,
		"fallback": "boxicons:moon-phase-0-filled",
	});
}

export default Component;
