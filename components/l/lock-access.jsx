import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gy76p--eb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gy76p--eb"/>`,
		"fallback": "uis:lock-access",
	});
}

export default Component;
