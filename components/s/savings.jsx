import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/adq8x7bza.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="adq8x7bza"/>`,
		"fallback": "ix:savings",
	});
}

export default Component;
