import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bix19ac1k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bix19ac1k"/>`,
		"fallback": "mdi:washer",
	});
}

export default Component;
