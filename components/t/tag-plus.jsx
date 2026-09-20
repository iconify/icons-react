import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bck3y324g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bck3y324g"/>`,
		"fallback": "mynaui:tag-plus",
	});
}

export default Component;
