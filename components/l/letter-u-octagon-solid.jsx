import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wytsss47o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wytsss47o"/>`,
		"fallback": "mynaui:letter-u-octagon-solid",
	});
}

export default Component;
