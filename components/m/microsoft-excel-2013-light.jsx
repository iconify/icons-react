import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d488w9blp.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="d488w9blp"/>`,
		"fallback": "selfhst:microsoft-excel-2013-light",
	});
}

export default Component;
