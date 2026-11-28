import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zb23s1bng.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zb23s1bng"/>`,
		"fallback": "noviair:keyboard",
	});
}

export default Component;
