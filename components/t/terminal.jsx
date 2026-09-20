import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wxj7stbfv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wxj7stbfv"/>`,
		"fallback": "keyline-icons:terminal",
	});
}

export default Component;
