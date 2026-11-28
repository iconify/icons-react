import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hgy-j0b3s.css';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hgy-j0b3s"/>`,
		"fallback": "pullo:license-plate-fill",
	});
}

export default Component;
