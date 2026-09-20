import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w35xc6b7d.css';

const viewBox = {"width":24,"height":25};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="w35xc6b7d"/>`,
		"fallback": "lineicons:star-fat",
	});
}

export default Component;
