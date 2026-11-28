import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u723nvf-q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u723nvf-q"/>`,
		"fallback": "noviair:tie",
	});
}

export default Component;
