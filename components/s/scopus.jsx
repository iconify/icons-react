import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vzv-z1sfz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vzv-z1sfz"/>`,
		"fallback": "thesvg-color:scopus",
	});
}

export default Component;
