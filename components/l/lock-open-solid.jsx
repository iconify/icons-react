import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w4jt-mads.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="w4jt-mads"/>`,
		"fallback": "pixel:lock-open-solid",
	});
}

export default Component;
