import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qp3n9jxlh.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qp3n9jxlh"/>`,
		"fallback": "whh:lens",
	});
}

export default Component;
