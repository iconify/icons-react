import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y-tunxbsb.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="y-tunxbsb"/>`,
		"fallback": "streamline-plump-color:new-folder-flat",
	});
}

export default Component;
