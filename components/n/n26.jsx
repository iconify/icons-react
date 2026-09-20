import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wwb0a3hgz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wwb0a3hgz"/>`,
		"fallback": "thesvg-color:n26",
	});
}

export default Component;
