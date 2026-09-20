import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fccbu8b2v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fccbu8b2v"/>`,
		"fallback": "tdesign:numbers-4",
	});
}

export default Component;
