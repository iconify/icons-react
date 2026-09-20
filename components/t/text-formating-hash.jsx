import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j9kf022eu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="j9kf022eu"/>`,
		"fallback": "streamline-freehand:text-formating-hash",
	});
}

export default Component;
