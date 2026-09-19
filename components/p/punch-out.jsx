import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y93_u216t.css';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="y93_u216t"/>`,
		"fallback": "fad:punch-out",
	});
}

export default Component;
