import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/eg6v3mbbk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="eg6v3mbbk"/>`,
		"fallback": "noviair-light:user-circle-check",
	});
}

export default Component;
