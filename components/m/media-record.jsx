import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vpngveb6a.css';

const viewBox = {"width":8,"height":8};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vpngveb6a"/>`,
		"fallback": "oi:media-record",
	});
}

export default Component;
