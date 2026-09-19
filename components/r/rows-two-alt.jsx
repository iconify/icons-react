import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mwy6e0b_j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="mwy6e0b_j"/>`,
		"fallback": "griddy-icons:rows-two-alt",
	});
}

export default Component;
