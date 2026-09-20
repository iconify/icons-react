import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pc3e-fbhg.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pc3e-fbhg"/>`,
		"fallback": "la:paste-solid",
	});
}

export default Component;
