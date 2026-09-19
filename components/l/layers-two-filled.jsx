import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/we0deogqu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="we0deogqu"/>`,
		"fallback": "griddy-icons:layers-two-filled",
	});
}

export default Component;
