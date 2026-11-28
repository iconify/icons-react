import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vo1n_uf6i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vo1n_uf6i"/>`,
		"fallback": "iconaut:octagon-x-solid",
	});
}

export default Component;
