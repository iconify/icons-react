import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/ckun01bzs.css';

const viewBox = {"width":29,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ckun01bzs"/>`,
		"fallback": "fontisto:justify",
	});
}

export default Component;
