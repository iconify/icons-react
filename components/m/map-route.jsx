import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/iknee7b-g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="iknee7b-g"/>`,
		"fallback": "tabler:map-route",
	});
}

export default Component;
