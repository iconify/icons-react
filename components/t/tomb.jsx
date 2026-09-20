import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qnzlfx9_v.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qnzlfx9_v"/>`,
		"fallback": "roentgen:tomb",
	});
}

export default Component;
