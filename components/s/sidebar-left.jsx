import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fd--g6b3n.css';

const viewBox = {"width":56,"height":56};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fd--g6b3n"/>`,
		"fallback": "f7:sidebar-left",
	});
}

export default Component;
