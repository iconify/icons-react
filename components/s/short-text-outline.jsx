import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fat_nsbqy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fat_nsbqy"/>`,
		"fallback": "cuida:short-text-outline",
	});
}

export default Component;
