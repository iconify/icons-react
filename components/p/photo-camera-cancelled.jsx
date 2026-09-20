import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ie8p9lh6d.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ie8p9lh6d"/>`,
		"fallback": "ix:photo-camera-cancelled",
	});
}

export default Component;
