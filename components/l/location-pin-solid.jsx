import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q-e3s_b-q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q-e3s_b-q"/>`,
		"fallback": "pixel:location-pin-solid",
	});
}

export default Component;
