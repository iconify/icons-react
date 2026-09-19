import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i5i8bacxz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="i5i8bacxz"/>`,
		"fallback": "ci:play-circle-filled",
	});
}

export default Component;
