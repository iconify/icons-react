import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fs1mzqurt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fs1mzqurt"/>`,
		"fallback": "tabler:square-rounded-letter-s-filled",
	});
}

export default Component;
