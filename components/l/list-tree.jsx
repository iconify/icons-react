import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vgg03ub4h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vgg03ub4h"/>`,
		"fallback": "tabler:list-tree",
	});
}

export default Component;
