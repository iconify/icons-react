import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q45a_2_uo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q45a_2_uo"/>`,
		"fallback": "noviair-light:thermostat-alert",
	});
}

export default Component;
