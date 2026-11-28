import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zsuxle7aj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zsuxle7aj"/>`,
		"fallback": "iconaut:square-activity-solid",
	});
}

export default Component;
