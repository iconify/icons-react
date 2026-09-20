import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hiw4zpdte.css';

const viewBox = {"width":30,"height":30};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hiw4zpdte"/>`,
		"fallback": "wi:moon-waning-crescent-2",
	});
}

export default Component;
