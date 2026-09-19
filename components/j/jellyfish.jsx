import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wrfup75is.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wrfup75is"/>`,
		"fallback": "iconoir:jellyfish",
	});
}

export default Component;
