import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o4llw0bfh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="o4llw0bfh"/>`,
		"fallback": "grommet-icons:unlock",
	});
}

export default Component;
