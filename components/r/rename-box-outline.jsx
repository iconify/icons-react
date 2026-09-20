import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/ww04fyd9l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ww04fyd9l"/>`,
		"fallback": "mdi:rename-box-outline",
	});
}

export default Component;
