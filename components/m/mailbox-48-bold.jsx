import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hvfjtltty.css';
import '../../css/l/livgcivqb.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hvfjtltty"/><path class="livgcivqb"/>`,
		"fallback": "energy-icons:mailbox-48-bold",
	});
}

export default Component;
