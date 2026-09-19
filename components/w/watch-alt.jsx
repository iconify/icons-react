import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yure3d40v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yure3d40v"/>`,
		"fallback": "fe:watch-alt",
	});
}

export default Component;
