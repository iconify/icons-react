import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oxe30nuth.css';
import '../../css/i/i5z920-bz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="oxe30nuth"/><path class="i5z920-bz"/>`,
		"fallback": "solar:screencast-2-bold",
	});
}

export default Component;
