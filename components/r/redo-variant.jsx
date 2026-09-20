import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y4ltwlb2k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="y4ltwlb2k"/>`,
		"fallback": "mdi:redo-variant",
	});
}

export default Component;
