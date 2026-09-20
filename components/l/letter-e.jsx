import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rd31yq_fd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rd31yq_fd"/>`,
		"fallback": "pixelarticons:letter-e",
	});
}

export default Component;
