import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qt9xsy.css';
import '../../css/u/uh4u4q.css';
import '../../css/s/so-from-54.css';
import '../../css/f/fade-to-1.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qt9xsy"/><circle class="uh4u4q"/>`,
		"fallback": "line-md:switch",
	});
}

export default Component;
