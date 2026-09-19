import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qep29e6oo.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qep29e6oo"/>`,
		"fallback": "codicon:repo-compact",
	});
}

export default Component;
