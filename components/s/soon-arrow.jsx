import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/ddq_2tbpa.css';
import '../../css/u/u9_0cx3wu.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ddq_2tbpa"/><path class="u9_0cx3wu"/>`,
		"fallback": "openmoji:soon-arrow",
	});
}

export default Component;
