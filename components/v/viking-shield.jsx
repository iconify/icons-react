import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oyfl8jbll.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="oyfl8jbll"/>`,
		"fallback": "game-icons:viking-shield",
	});
}

export default Component;
