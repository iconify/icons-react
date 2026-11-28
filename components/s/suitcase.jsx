import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cf9p40zkd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cf9p40zkd"/>`,
		"fallback": "noviair-light:suitcase",
	});
}

export default Component;
