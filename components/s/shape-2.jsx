import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tbw62cbwu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tbw62cbwu"/>`,
		"fallback": "tabler:shape-2",
	});
}

export default Component;
