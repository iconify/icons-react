import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m51pp1z2q.css';

const viewBox = {"width":960,"height":1792};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m51pp1z2q"/>`,
		"fallback": "fa:usd",
	});
}

export default Component;
