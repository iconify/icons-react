import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hcp77acbu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hcp77acbu"/>`,
		"fallback": "thesvg-color:itunes",
	});
}

export default Component;
