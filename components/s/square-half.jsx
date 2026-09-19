import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jr8bo8nbm.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jr8bo8nbm"/>`,
		"fallback": "bi:square-half",
	});
}

export default Component;
