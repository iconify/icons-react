import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v7nc4kadu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="v7nc4kadu"/>`,
		"fallback": "guidance:stairs-down-person",
	});
}

export default Component;
