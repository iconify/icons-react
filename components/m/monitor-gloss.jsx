import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zlgb9gjvu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zlgb9gjvu"/>`,
		"fallback": "withicons:monitor-gloss",
	});
}

export default Component;
