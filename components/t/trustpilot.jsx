import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b0216bb9l.css';
import '../../css/o/o_a2tub4v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b0216bb9l"/><path class="o_a2tub4v"/>`,
		"fallback": "bxl:trustpilot",
	});
}

export default Component;
