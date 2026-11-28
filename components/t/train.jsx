import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dy6g12bgh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dy6g12bgh"/>`,
		"fallback": "noviair:train",
	});
}

export default Component;
