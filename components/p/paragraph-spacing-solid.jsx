import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pxxo35b4i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pxxo35b4i"/>`,
		"fallback": "iconaut:paragraph-spacing-solid",
	});
}

export default Component;
