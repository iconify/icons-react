import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kr6q3nn4v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kr6q3nn4v"/>`,
		"fallback": "griddy-icons:smart-watch-filled",
	});
}

export default Component;
