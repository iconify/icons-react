import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j7mu6fb4p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j7mu6fb4p"/>`,
		"fallback": "meteor-icons:threads",
	});
}

export default Component;
