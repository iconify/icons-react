import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qria0dbxe.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qria0dbxe"/>`,
		"fallback": "thesvg-color:spine",
	});
}

export default Component;
