import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pb7i509sz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pb7i509sz"/>`,
		"fallback": "mdi:vector-polygon",
	});
}

export default Component;
