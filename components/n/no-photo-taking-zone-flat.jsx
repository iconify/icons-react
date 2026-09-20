import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/omeiwubuz.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="omeiwubuz"/>`,
		"fallback": "streamline-plump-color:no-photo-taking-zone-flat",
	});
}

export default Component;
