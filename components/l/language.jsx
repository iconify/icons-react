import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ey_qkc5et.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ey_qkc5et"/>`,
		"fallback": "grommet-icons:language",
	});
}

export default Component;
