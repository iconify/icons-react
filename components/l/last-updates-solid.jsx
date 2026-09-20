import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/polv-0les.css';
import '../../css/f/fsw0aeb5r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="polv-0les"/><path class="fsw0aeb5r"/>`,
		"fallback": "stash:last-updates-solid",
	});
}

export default Component;
