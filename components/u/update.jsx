import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/og0d26bzz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="og0d26bzz"/>`,
		"fallback": "grommet-icons:update",
	});
}

export default Component;
