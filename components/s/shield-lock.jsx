import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/ao65_1bln.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ao65_1bln"/>`,
		"fallback": "noviair:shield-lock",
	});
}

export default Component;
