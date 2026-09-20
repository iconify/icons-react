import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nn5q55bir.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nn5q55bir"/>`,
		"fallback": "streamline-flex:pdf-reader-application",
	});
}

export default Component;
