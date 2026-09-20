import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fciy3kb5x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fciy3kb5x"/>`,
		"fallback": "pixel:table",
	});
}

export default Component;
