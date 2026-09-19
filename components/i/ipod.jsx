import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zrvkwrb7v.css';

const viewBox = {"width":384,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zrvkwrb7v"/>`,
		"fallback": "ps:ipod",
	});
}

export default Component;
