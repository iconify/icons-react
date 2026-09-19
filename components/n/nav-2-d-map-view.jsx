import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jteibjb6u.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jteibjb6u"/>`,
		"fallback": "fluent-mdl2:nav-2-d-map-view",
	});
}

export default Component;
