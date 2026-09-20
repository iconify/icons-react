import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ywyq4xb5w.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="ywyq4xb5w"/>`,
		"fallback": "oui:thumbs-down",
	});
}

export default Component;
