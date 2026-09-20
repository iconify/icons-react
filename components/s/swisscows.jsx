import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/to0ql8b0g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="to0ql8b0g"/>`,
		"fallback": "thesvg-color:swisscows",
	});
}

export default Component;
