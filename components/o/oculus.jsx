import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wj9lswfhf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wj9lswfhf"/>`,
		"fallback": "thesvg-color:oculus",
	});
}

export default Component;
