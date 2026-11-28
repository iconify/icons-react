import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zt17-0bxv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="primary zt17-0bxv"/>`,
		"fallback": "iconaut:list-plus-duotone",
	});
}

export default Component;
