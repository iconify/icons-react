import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i0l4hcbpl.css';
import '../../css/c/cv78-1bqq.css';
import '../../css/t/t61n078pb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="i0l4hcbpl"/><path class="cv78-1bqq"/><path class="t61n078pb"/>`,
		"fallback": "streamline-freehand:messages-people-woman-heart",
	});
}

export default Component;
