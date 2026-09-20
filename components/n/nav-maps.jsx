import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qcq9xbc8n.css';
import '../../css/y/y62gldb-q.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qcq9xbc8n"/><path class="y62gldb-q"/>`,
		"fallback": "oui:nav-maps",
	});
}

export default Component;
