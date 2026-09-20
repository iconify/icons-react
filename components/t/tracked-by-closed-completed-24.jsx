import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ilw1vqb3q.css';
import '../../css/m/mtfwbcc5s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ilw1vqb3q"/><path class="mtfwbcc5s"/>`,
		"fallback": "octicon:tracked-by-closed-completed-24",
	});
}

export default Component;
