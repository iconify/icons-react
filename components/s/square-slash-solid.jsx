import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g9n_zsbit.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g9n_zsbit"/>`,
		"fallback": "iconaut:square-slash-solid",
	});
}

export default Component;
