import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qc5aw5fhx.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qc5aw5fhx"/>`,
		"fallback": "la:the-red-yeti",
	});
}

export default Component;
