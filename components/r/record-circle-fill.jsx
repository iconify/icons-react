import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/drlddqb5t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="drlddqb5t"/>`,
		"fallback": "ri:record-circle-fill",
	});
}

export default Component;
