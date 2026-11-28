import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mwb00usql.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mwb00usql"/>`,
		"fallback": "iconaut:soda-bottle-solid",
	});
}

export default Component;
