import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o5oqb4b7l.css';

const viewBox = {"width":24,"height":24,"left":-2,"top":-7};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="o5oqb4b7l"/>`,
		"fallback": "jam:rainbow",
	});
}

export default Component;
