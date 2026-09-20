import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k_1i5p4fg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k_1i5p4fg"/>`,
		"fallback": "uit:vector-square",
	});
}

export default Component;
