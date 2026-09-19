import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/axoztvb4y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="axoztvb4y"/>`,
		"fallback": "griddy-icons:more-horizontal",
	});
}

export default Component;
