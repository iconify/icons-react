import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yth0o7dpt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="yth0o7dpt"/>`,
		"fallback": "reicon:mirror2",
	});
}

export default Component;
