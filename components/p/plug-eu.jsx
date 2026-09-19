import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yaf099rbf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yaf099rbf"/>`,
		"fallback": "cbi:plug-eu",
	});
}

export default Component;
