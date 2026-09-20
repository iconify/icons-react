import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wqxvh-bno.css';
import '../../css/j/jheje3btr.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wqxvh-bno"/><path class="jheje3btr"/>`,
		"fallback": "streamline-pixel:video-movies-set-equipment",
	});
}

export default Component;
