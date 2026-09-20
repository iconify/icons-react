import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/owg7w8ayy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="owg7w8ayy"/>`,
		"fallback": "thesvg:smart",
	});
}

export default Component;
