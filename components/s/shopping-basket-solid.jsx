import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gfsvxz4qw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gfsvxz4qw"/>`,
		"fallback": "iconaut:shopping-basket-solid",
	});
}

export default Component;
