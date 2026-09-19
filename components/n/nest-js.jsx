import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d7ndexc2h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="d7ndexc2h"/>`,
		"fallback": "bxl:nest-js",
	});
}

export default Component;
