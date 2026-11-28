import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/ptk6-3vvo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ptk6-3vvo"/>`,
		"fallback": "noviair:tag-x",
	});
}

export default Component;
