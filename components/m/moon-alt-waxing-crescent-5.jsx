import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fkjjvlbhl.css';

const viewBox = {"width":30,"height":30};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fkjjvlbhl"/>`,
		"fallback": "wi:moon-alt-waxing-crescent-5",
	});
}

export default Component;
