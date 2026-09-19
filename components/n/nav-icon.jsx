import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kex8uib9d.css';

const viewBox = {"width":28,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kex8uib9d"/>`,
		"fallback": "fontisto:nav-icon",
	});
}

export default Component;
