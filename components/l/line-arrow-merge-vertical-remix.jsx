import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xk4uyrk5w.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="xk4uyrk5w"/>`,
		"fallback": "streamline-flex:line-arrow-merge-vertical-remix",
	});
}

export default Component;
