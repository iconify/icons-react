import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x6y2bzbhu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x6y2bzbhu"/>`,
		"fallback": "ci:user-03",
	});
}

export default Component;
