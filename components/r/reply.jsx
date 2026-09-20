import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pp2pmeb1q.css';

const viewBox = {"width":14,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pp2pmeb1q"/>`,
		"fallback": "octicon:reply",
	});
}

export default Component;
