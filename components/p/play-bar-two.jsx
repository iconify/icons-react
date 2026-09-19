import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fd1z4ji4f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fd1z4ji4f"/>`,
		"fallback": "cbi:play-bar-two",
	});
}

export default Component;
