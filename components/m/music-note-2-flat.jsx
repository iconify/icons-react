import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vp9mcwqrd.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vp9mcwqrd"/>`,
		"fallback": "streamline-plump-color:music-note-2-flat",
	});
}

export default Component;
