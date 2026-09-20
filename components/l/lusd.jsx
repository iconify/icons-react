import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yq0u8kb-s.css';
import '../../css/x/xo6cg7b4r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yq0u8kb-s"/><path class="xo6cg7b4r"/>`,
		"fallback": "token:lusd",
	});
}

export default Component;
