import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/iptqevhoy.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="iptqevhoy"/>`,
		"fallback": "codicon:list-tree",
	});
}

export default Component;
