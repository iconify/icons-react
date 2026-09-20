import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rz71kybyz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<rect class="rz71kybyz"/>`,
		"fallback": "lucide:square",
	});
}

export default Component;
