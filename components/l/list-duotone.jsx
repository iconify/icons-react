import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/eux9rf7bu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="eux9rf7bu primary"/>`,
		"fallback": "iconaut:list-duotone",
	});
}

export default Component;
