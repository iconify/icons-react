import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/usmo0gbrf.css';
import '../../css/t/tvepgg8ps.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="usmo0gbrf"/><path class="tvepgg8ps"/>`,
		"fallback": "openmoji:right-arrow",
	});
}

export default Component;
