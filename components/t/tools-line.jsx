import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cvne9nv5v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cvne9nv5v"/>`,
		"fallback": "ri:tools-line",
	});
}

export default Component;
