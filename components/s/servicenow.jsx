import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uuomrd10d.css';

const viewBox = {"width":64,"height":64};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uuomrd10d"/>`,
		"fallback": "thesvg-color:servicenow",
	});
}

export default Component;
