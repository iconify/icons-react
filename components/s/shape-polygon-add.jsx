import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xs0i7_h4h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xs0i7_h4h"/>`,
		"fallback": "mdi:shape-polygon-add",
	});
}

export default Component;
