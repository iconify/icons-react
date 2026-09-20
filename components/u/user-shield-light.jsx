import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tbpi54-3i.css';
import '../../css/h/h4vuonvwz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tbpi54-3i"/><path class="h4vuonvwz"/>`,
		"fallback": "stash:user-shield-light",
	});
}

export default Component;
