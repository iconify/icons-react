import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/clymk1bpk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="clymk1bpk"/>`,
		"fallback": "coolicons:list-checklist-round",
	});
}

export default Component;
