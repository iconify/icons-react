import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tuw7l6b9d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tuw7l6b9d"/>`,
		"fallback": "token:mbox",
	});
}

export default Component;
