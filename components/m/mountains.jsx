import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mrftxpb2r.css';

const viewBox = {"width":1024,"height":895};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mrftxpb2r"/>`,
		"fallback": "whh:mountains",
	});
}

export default Component;
