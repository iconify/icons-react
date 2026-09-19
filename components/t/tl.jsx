import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d-f7tacxz.css';

const viewBox = {"width":18,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="d-f7tacxz"/>`,
		"fallback": "fontisto:tl",
	});
}

export default Component;
