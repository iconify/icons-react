import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u48w4hbch.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u48w4hbch"/>`,
		"fallback": "heroicons:paper-clip",
	});
}

export default Component;
