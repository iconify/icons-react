import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wbbpg3bnj.css';

const viewBox = {"width":24,"height":24,"left":-2.5,"top":-2};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wbbpg3bnj"/>`,
		"fallback": "jam:vine",
	});
}

export default Component;
