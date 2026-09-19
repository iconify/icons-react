import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y4jze1rqt.css';

const viewBox = {"width":42,"height":42};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="y4jze1rqt"/>`,
		"fallback": "topcoat:settings",
	});
}

export default Component;
