import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yxs1z5b8n.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yxs1z5b8n"/>`,
		"fallback": "devicon-plain:rxjs",
	});
}

export default Component;
