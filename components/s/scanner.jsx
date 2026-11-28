import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zv3b-bb7u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zv3b-bb7u"/>`,
		"fallback": "noviair-light:scanner",
	});
}

export default Component;
