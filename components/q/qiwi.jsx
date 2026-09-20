import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vesu1zhte.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vesu1zhte"/>`,
		"fallback": "thesvg:qiwi",
	});
}

export default Component;
