import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mt4ijfdhy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mt4ijfdhy"/>`,
		"fallback": "mdi:state-machine",
	});
}

export default Component;
