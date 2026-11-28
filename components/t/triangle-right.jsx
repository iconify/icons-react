import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wyrz-1ftw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wyrz-1ftw"/>`,
		"fallback": "iconaut:triangle-right",
	});
}

export default Component;
