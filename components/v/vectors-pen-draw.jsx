import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x729vib_h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x729vib_h"/>`,
		"fallback": "streamline-freehand:vectors-pen-draw",
	});
}

export default Component;
