import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lrz4h5bcf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lrz4h5bcf"/>`,
		"fallback": "ci:list-plus",
	});
}

export default Component;
