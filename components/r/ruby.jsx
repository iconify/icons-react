import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pxc63y5rs.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pxc63y5rs"/>`,
		"fallback": "thesvg:ruby",
	});
}

export default Component;
