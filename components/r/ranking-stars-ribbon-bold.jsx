import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i1qw3obyw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="i1qw3obyw"/>`,
		"fallback": "streamline-ultimate:ranking-stars-ribbon-bold",
	});
}

export default Component;
