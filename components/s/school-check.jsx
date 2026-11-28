import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kbdsvtb9p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kbdsvtb9p"/>`,
		"fallback": "noviair:school-check",
	});
}

export default Component;
