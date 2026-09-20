import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nfz4o-m7z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nfz4o-m7z"/>`,
		"fallback": "mdi:remote-tv",
	});
}

export default Component;
