import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/di17q7f4k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="di17q7f4k"/>`,
		"fallback": "griddy-icons:scan-alt-filled",
	});
}

export default Component;
