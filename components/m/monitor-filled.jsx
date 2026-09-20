import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kgisqnb7z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kgisqnb7z"/>`,
		"fallback": "reicon:monitor-filled",
	});
}

export default Component;
