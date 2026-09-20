import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ot2ejsbfu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ot2ejsbfu"/>`,
		"fallback": "streamline-cyber:scissor-2",
	});
}

export default Component;
