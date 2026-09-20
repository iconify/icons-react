import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/eng9nmbok.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="eng9nmbok"/>`,
		"fallback": "simple-icons:ratatui",
	});
}

export default Component;
