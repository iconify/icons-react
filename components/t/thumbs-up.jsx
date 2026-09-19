import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t_n2mbcaa.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t_n2mbcaa"/>`,
		"fallback": "gridicons:thumbs-up",
	});
}

export default Component;
