import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fab0zybii.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fab0zybii"/>`,
		"fallback": "thesvg-color:roadmapdotsh",
	});
}

export default Component;
