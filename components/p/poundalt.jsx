import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nnvbi1bye.css';

const viewBox = {"width":1024,"height":1023};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nnvbi1bye"/>`,
		"fallback": "whh:poundalt",
	});
}

export default Component;
