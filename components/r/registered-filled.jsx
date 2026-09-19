import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oy03h6b4p.css';
import '../../css/b/bqc5p2b1e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="oy03h6b4p"/><path class="bqc5p2b1e"/>`,
		"fallback": "boxicons:registered-filled",
	});
}

export default Component;
