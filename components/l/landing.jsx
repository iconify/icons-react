import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/py1yytzwi.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="py1yytzwi"/>`,
		"fallback": "raphael:landing",
	});
}

export default Component;
