import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p1a5oq34v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="p1a5oq34v"/>`,
		"fallback": "stash:paper-clock-solid",
	});
}

export default Component;
