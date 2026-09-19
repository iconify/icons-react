import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aa6nbwb7u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="aa6nbwb7u"/>`,
		"fallback": "grommet-icons:satellite",
	});
}

export default Component;
