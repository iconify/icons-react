import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wg2jj14us.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wg2jj14us"/>`,
		"fallback": "carbon:sequential-palette",
	});
}

export default Component;
