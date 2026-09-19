import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y_qdteboe.css';

const viewBox = {"width":448,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="y_qdteboe"/>`,
		"fallback": "fa6-brands:sitrox",
	});
}

export default Component;
