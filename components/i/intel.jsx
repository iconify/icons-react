import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xnfz8ubng.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xnfz8ubng"/>`,
		"fallback": "whh:intel",
	});
}

export default Component;
