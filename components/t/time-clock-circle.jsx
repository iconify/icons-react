import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o-6j15bmw.css';
import '../../css/w/w96tcbb1z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="o-6j15bmw"/><path class="w96tcbb1z"/>`,
		"fallback": "streamline-freehand:time-clock-circle",
	});
}

export default Component;
