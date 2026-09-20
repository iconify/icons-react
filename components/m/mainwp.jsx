import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wx6sfjkov.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wx6sfjkov"/>`,
		"fallback": "thesvg-color:mainwp",
	});
}

export default Component;
