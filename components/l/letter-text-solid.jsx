import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cidw6ibpj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cidw6ibpj"/>`,
		"fallback": "iconaut:letter-text-solid",
	});
}

export default Component;
