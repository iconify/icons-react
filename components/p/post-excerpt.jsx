import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w8symv77j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path vector-effect="non-scaling-stroke" class="w8symv77j"/>`,
		"fallback": "wordpress:post-excerpt",
	});
}

export default Component;
