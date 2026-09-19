import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mr4e3jb3k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mr4e3jb3k"/>`,
		"fallback": "bxl:trello",
	});
}

export default Component;
