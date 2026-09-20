import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xdh-lqh4f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="xdh-lqh4f"/>`,
		"fallback": "solar:point-on-map-perspective-outline",
	});
}

export default Component;
