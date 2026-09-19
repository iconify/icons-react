import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tphpk35hu.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tphpk35hu"/>`,
		"fallback": "fluent-mdl2:memo",
	});
}

export default Component;
