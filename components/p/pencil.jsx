import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/icwu4ka3r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="icwu4ka3r"/>`,
		"fallback": "heroicons-outline:pencil",
	});
}

export default Component;
