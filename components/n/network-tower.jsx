import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ug4ezub9m.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ug4ezub9m"/>`,
		"fallback": "fluent-mdl2:network-tower",
	});
}

export default Component;
