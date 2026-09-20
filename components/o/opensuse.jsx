import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yd2cuzbvd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yd2cuzbvd"/>`,
		"fallback": "thesvg-color:opensuse",
	});
}

export default Component;
