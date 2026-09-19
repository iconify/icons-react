import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u7ld5ib0v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u7ld5ib0v"/>`,
		"fallback": "grommet-icons:link-top",
	});
}

export default Component;
