import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vfg3yjb0v.css';

const viewBox = {"width":24,"height":24,"left":-2,"top":-2.5};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vfg3yjb0v"/>`,
		"fallback": "jam:messages-f",
	});
}

export default Component;
