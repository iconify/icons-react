import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/st0wm4bnj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="st0wm4bnj"/>`,
		"fallback": "ix:shield-ai",
	});
}

export default Component;
