import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/utuuzjb3p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="primary utuuzjb3p"/>`,
		"fallback": "iconaut:threads-duotone",
	});
}

export default Component;
