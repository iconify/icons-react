import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y51pbhb3p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="y51pbhb3p"/>`,
		"fallback": "si:star-alt-fill",
	});
}

export default Component;
