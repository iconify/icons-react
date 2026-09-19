import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rg74h9u7w.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rg74h9u7w"/>`,
		"fallback": "ep:trophy",
	});
}

export default Component;
