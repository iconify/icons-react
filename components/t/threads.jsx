import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/th7y1ob8p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="th7y1ob8p"/>`,
		"fallback": "griddy-icons:threads",
	});
}

export default Component;
