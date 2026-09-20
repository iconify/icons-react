import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n2111784r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="n2111784r"/>`,
		"fallback": "reicon:maximize-square-filled",
	});
}

export default Component;
