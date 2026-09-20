import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k88w72b6x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k88w72b6x"/>`,
		"fallback": "thesvg-color:netto",
	});
}

export default Component;
