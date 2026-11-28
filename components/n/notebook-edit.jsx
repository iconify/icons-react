import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gslw0nbhi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gslw0nbhi"/>`,
		"fallback": "noviair-light:notebook-edit",
	});
}

export default Component;
