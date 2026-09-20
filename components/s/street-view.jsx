import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f_4v44_8n.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f_4v44_8n"/>`,
		"fallback": "la:street-view",
	});
}

export default Component;
