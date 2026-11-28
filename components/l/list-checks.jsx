import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lwwac4bfa.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lwwac4bfa"/>`,
		"fallback": "noviair-light:list-checks",
	});
}

export default Component;
