import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1efuxbbf.css';

const viewBox = {"width":464,"height":448};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="n1efuxbbf"/>`,
		"fallback": "ps:w3",
	});
}

export default Component;
