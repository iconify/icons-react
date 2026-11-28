import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mz4xghbeb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mz4xghbeb"/>`,
		"fallback": "iconaut:triangle-alert-solid",
	});
}

export default Component;
