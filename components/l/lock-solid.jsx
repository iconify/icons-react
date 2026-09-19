import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wwe7utqcb.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wwe7utqcb"/>`,
		"fallback": "fluent-mdl2:lock-solid",
	});
}

export default Component;
