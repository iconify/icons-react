import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kez3htb6p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<circle class="kez3htb6p"/>`,
		"fallback": "struq:step-todo",
	});
}

export default Component;
