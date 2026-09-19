import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tmh5s_g6g.css';

const viewBox = {"width":56,"height":56};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tmh5s_g6g"/>`,
		"fallback": "f7:option",
	});
}

export default Component;
