import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ugua35byx.css';

const viewBox = {"width":384,"height":384};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ugua35byx"/>`,
		"fallback": "zmdi:local-hospital",
	});
}

export default Component;
