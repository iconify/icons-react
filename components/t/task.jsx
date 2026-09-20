import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pja4ugrdb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pja4ugrdb"/>`,
		"fallback": "simple-icons:task",
	});
}

export default Component;
