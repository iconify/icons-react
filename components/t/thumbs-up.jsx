import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w3lddg.css';
import '../../css/s/so-from-76.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="w3lddg"/>`,
		"fallback": "line-md:thumbs-up",
	});
}

export default Component;
