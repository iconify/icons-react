import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fx5hbbb0q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fx5hbbb0q"/>`,
		"fallback": "iconaut:utensils-crossed-solid",
	});
}

export default Component;
