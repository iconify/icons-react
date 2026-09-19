import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/netr9ulfa.css';
import '../../css/k/kwu9_fbgy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="netr9ulfa"/><path class="kwu9_fbgy"/>`,
		"fallback": "bx:task-x",
	});
}

export default Component;
