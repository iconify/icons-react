import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yh7ji5b1g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yh7ji5b1g"/>`,
		"fallback": "ci:magnifying-glass-minus",
	});
}

export default Component;
