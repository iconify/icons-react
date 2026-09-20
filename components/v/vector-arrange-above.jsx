import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xf1qn4z0t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xf1qn4z0t"/>`,
		"fallback": "mdi:vector-arrange-above",
	});
}

export default Component;
