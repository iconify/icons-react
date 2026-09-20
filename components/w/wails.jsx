import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qe0fqcb_j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qe0fqcb_j"/>`,
		"fallback": "thesvg:wails",
	});
}

export default Component;
