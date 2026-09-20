import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/iua635beg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="iua635beg"/>`,
		"fallback": "mdi:photo-album",
	});
}

export default Component;
