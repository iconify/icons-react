import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wx9l4gb5m.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wx9l4gb5m"/>`,
		"fallback": "fluent-mdl2:separator",
	});
}

export default Component;
