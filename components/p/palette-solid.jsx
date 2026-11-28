import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i312qdf_s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="i312qdf_s"/>`,
		"fallback": "iconaut:palette-solid",
	});
}

export default Component;
