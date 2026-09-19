import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/ci5wxgb0r.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ci5wxgb0r"/>`,
		"fallback": "codicon:repo-forked-compact",
	});
}

export default Component;
