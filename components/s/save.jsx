import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/ni63bu-xw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ni63bu-xw"/>`,
		"fallback": "heroicons-outline:save",
	});
}

export default Component;
