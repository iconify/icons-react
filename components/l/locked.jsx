import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sloln0bvd.css';

const viewBox = {"width":20,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sloln0bvd"/>`,
		"fallback": "fontisto:locked",
	});
}

export default Component;
