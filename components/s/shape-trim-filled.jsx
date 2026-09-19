import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vyyqn4wxr.css';
import '../../css/y/yuqpybceb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<rect class="vyyqn4wxr"/><path class="yuqpybceb"/>`,
		"fallback": "boxicons:shape-trim-filled",
	});
}

export default Component;
