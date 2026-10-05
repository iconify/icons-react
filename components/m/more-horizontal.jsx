import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w80w45bcb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="w80w45bcb"/>`,
		"fallback": "matita:more-horizontal",
	});
}

export default Component;
