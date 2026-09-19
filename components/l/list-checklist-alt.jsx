import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qcfniyu4i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qcfniyu4i"/>`,
		"fallback": "ci:list-checklist-alt",
	});
}

export default Component;
