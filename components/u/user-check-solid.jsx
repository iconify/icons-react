import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xzt8uf4ax.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xzt8uf4ax"/>`,
		"fallback": "iconaut:user-check-solid",
	});
}

export default Component;
