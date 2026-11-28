import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jjnqlv-7x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jjnqlv-7x primary"/>`,
		"fallback": "iconaut:stop-duotone",
	});
}

export default Component;
