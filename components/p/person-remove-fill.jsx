import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v1dv60p8j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="v1dv60p8j"/>`,
		"fallback": "eva:person-remove-fill",
	});
}

export default Component;
