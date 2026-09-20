import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fh2k2lb0y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fh2k2lb0y"/>`,
		"fallback": "mynaui:trello-solid",
	});
}

export default Component;
