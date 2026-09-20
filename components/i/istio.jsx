import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yexlg6mkf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yexlg6mkf"/>`,
		"fallback": "simple-icons:istio",
	});
}

export default Component;
