import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gmt8y0odu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gmt8y0odu"/>`,
		"fallback": "iconaut:peace-sign-solid",
	});
}

export default Component;
