import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xhwgx5bmm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xhwgx5bmm"/>`,
		"fallback": "noviair:square-arrow-left",
	});
}

export default Component;
