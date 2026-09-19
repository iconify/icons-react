import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e1z02kbki.css';

const viewBox = {"width":100,"height":100};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="e1z02kbki"/>`,
		"fallback": "gis:sos",
	});
}

export default Component;
