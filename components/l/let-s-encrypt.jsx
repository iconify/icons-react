import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/votzz4x_s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="votzz4x_s"/>`,
		"fallback": "thesvg-color:let-s-encrypt",
	});
}

export default Component;
