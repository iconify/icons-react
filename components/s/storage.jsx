import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pgvh4kkig.css';
import '../../css/r/r5sqe9b_h.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pgvh4kkig"/><path class="r5sqe9b_h"/>`,
		"fallback": "cil:storage",
	});
}

export default Component;
