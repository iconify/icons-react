import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jyc_qkbfa.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jyc_qkbfa"/>`,
		"fallback": "ri:spotify-fill",
	});
}

export default Component;
