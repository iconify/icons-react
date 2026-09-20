import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h80y0qbzt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h80y0qbzt"/>`,
		"fallback": "tabler:play-card-1",
	});
}

export default Component;
