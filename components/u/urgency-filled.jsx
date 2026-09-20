import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dy7t-cc1x.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="dy7t-cc1x"/>`,
		"fallback": "lsicon:urgency-filled",
	});
}

export default Component;
