import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/ddwa9ybpb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ddwa9ybpb"/>`,
		"fallback": "cbi:panel-glass-door-3-locked",
	});
}

export default Component;
