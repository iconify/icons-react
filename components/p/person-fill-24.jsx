import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/isufo5b5q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="isufo5b5q"/>`,
		"fallback": "octicon:person-fill-24",
	});
}

export default Component;
