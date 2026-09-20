import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tuan0__fh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tuan0__fh"/>`,
		"fallback": "thesvg-color:rxdb",
	});
}

export default Component;
