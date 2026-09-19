import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/astt8vb3v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="astt8vb3v"/>`,
		"fallback": "bxs:mobile",
	});
}

export default Component;
