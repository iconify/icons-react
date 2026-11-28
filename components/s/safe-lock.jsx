import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y7a3z31yu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="y7a3z31yu"/>`,
		"fallback": "noviair:safe-lock",
	});
}

export default Component;
