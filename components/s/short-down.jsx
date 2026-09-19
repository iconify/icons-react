import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lhxaa3bwi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lhxaa3bwi"/>`,
		"fallback": "ci:short-down",
	});
}

export default Component;
