import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/blkr1-zec.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="blkr1-zec"/>`,
		"fallback": "iconaut:owl-solid",
	});
}

export default Component;
