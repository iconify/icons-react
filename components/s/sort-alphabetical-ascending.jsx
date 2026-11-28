import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vsd6y5yjl.css';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vsd6y5yjl"/>`,
		"fallback": "pullo:sort-alphabetical-ascending",
	});
}

export default Component;
