import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vtki3q1-n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vtki3q1-n"/>`,
		"fallback": "noviair:tabs-plus",
	});
}

export default Component;
