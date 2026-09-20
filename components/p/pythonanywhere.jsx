import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xei1q935s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xei1q935s"/>`,
		"fallback": "thesvg-color:pythonanywhere",
	});
}

export default Component;
