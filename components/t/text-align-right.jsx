import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w__z_2btt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="w__z_2btt"/>`,
		"fallback": "grommet-icons:text-align-right",
	});
}

export default Component;
