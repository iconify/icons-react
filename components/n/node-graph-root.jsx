import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o44li7u2p.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="o44li7u2p"/>`,
		"fallback": "at-icons:node-graph-root",
	});
}

export default Component;
