import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g5n1f5bao.css';

const viewBox = {"width":1536,"height":1536};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g5n1f5bao"/>`,
		"fallback": "fa:mars",
	});
}

export default Component;
