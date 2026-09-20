import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vmubjfrve.css';
import '../../css/o/oiva0jb0e.css';
import '../../css/g/ghoccmbdr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vmubjfrve"/><path class="oiva0jb0e"/><path class="ghoccmbdr"/>`,
		"fallback": "streamline-ultimate:skating-1-bold",
	});
}

export default Component;
