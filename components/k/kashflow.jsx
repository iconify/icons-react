import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/br0tc3bwu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="br0tc3bwu"/>`,
		"fallback": "thesvg-color:kashflow",
	});
}

export default Component;
