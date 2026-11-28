import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yydu7fitl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="primary yydu7fitl"/>`,
		"fallback": "iconaut:paintbrush-duotone",
	});
}

export default Component;
