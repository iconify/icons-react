import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lzp181btb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lzp181btb"/>`,
		"fallback": "ri:shapes-fill",
	});
}

export default Component;
