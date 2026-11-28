import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cv3b14b5p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cv3b14b5p"/>`,
		"fallback": "iconaut:qr-code-solid",
	});
}

export default Component;
