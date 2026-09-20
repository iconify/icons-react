import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f_6mmuz-z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f_6mmuz-z"/>`,
		"fallback": "tabler:text-wrap-disabled",
	});
}

export default Component;
