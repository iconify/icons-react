import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yyozl1h3n.css';

const viewBox = {"width":750,"height":819};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yyozl1h3n"/>`,
		"fallback": "ls:percent",
	});
}

export default Component;
