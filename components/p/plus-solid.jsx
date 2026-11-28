import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b71hky9nl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b71hky9nl"/>`,
		"fallback": "iconaut:plus-solid",
	});
}

export default Component;
