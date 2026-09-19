import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/doq3m8b6r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="doq3m8b6r"/>`,
		"fallback": "cbi:tagesschau24",
	});
}

export default Component;
