import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sha7p4r6y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sha7p4r6y"/>`,
		"fallback": "eva:rewind-left-fill",
	});
}

export default Component;
