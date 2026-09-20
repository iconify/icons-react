import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nz583db1b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nz583db1b"/>`,
		"fallback": "uil:plane-fly",
	});
}

export default Component;
