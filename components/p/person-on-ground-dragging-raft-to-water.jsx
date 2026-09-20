import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wv1b90jbj.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wv1b90jbj"/>`,
		"fallback": "pinhead:person-on-ground-dragging-raft-to-water",
	});
}

export default Component;
