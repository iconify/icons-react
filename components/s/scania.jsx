import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ike6rfddh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ike6rfddh"/>`,
		"fallback": "thesvg:scania",
	});
}

export default Component;
