import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w3caf4h6m.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="w3caf4h6m"/>`,
		"fallback": "streamline:pencil-remix",
	});
}

export default Component;
