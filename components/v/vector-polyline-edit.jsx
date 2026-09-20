import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lx7milbrc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lx7milbrc"/>`,
		"fallback": "mdi:vector-polyline-edit",
	});
}

export default Component;
