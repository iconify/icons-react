import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v53s81b7u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="v53s81b7u"/>`,
		"fallback": "pixel:page-break",
	});
}

export default Component;
