import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/suwe9-r6q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="suwe9-r6q"/>`,
		"fallback": "thesvg-color:racket",
	});
}

export default Component;
