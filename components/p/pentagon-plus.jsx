import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/agz0d01mv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="agz0d01mv"/>`,
		"fallback": "tabler:pentagon-plus",
	});
}

export default Component;
