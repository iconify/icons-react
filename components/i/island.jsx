import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hm6oswlyx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hm6oswlyx"/>`,
		"fallback": "noviair:island",
	});
}

export default Component;
