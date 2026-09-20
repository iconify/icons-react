import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mhad4bb7z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mhad4bb7z"/>`,
		"fallback": "si:monitor-pause-line",
	});
}

export default Component;
