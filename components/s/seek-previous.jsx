import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hhl0tnbcl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hhl0tnbcl"/>`,
		"fallback": "mdi-light:seek-previous",
	});
}

export default Component;
