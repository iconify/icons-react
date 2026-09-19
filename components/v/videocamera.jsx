import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cq1hgyzbb.css';

const viewBox = {"width":750,"height":750};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cq1hgyzbb"/>`,
		"fallback": "il:videocamera",
	});
}

export default Component;
