import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i1qn3scxf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="i1qn3scxf"/>`,
		"fallback": "mdi:navigation-variant",
	});
}

export default Component;
