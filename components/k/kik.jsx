import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/ab6qg3bpl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ab6qg3bpl"/>`,
		"fallback": "simple-icons:kik",
	});
}

export default Component;
