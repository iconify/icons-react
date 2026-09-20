import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m41hcbc2q.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m41hcbc2q"/>`,
		"fallback": "temaki:tunnel",
	});
}

export default Component;
