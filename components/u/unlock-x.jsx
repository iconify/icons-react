import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yaqutzb0l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yaqutzb0l"/>`,
		"fallback": "noviair:unlock-x",
	});
}

export default Component;
