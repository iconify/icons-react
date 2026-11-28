import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n9dd0e63q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="n9dd0e63q"/>`,
		"fallback": "noviair-light:scale-balance",
	});
}

export default Component;
