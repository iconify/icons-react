import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/quwyzac4q.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="quwyzac4q"/>`,
		"fallback": "codicon:library-compact",
	});
}

export default Component;
