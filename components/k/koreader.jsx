import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/ba_iovbdr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ba_iovbdr"/>`,
		"fallback": "simple-icons:koreader",
	});
}

export default Component;
