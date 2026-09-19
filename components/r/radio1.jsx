import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oocjo8pxv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="oocjo8pxv"/>`,
		"fallback": "cbi:radio1",
	});
}

export default Component;
