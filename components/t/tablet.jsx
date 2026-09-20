import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u7c9d3plm.css';

const viewBox = {"width":24,"height":24,"left":-4,"top":-2};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u7c9d3plm"/>`,
		"fallback": "jam:tablet",
	});
}

export default Component;
