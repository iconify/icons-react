import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k-0_zcc9v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k-0_zcc9v"/>`,
		"fallback": "thesvg-color:phpbb",
	});
}

export default Component;
