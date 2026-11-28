import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/i/it6ujub8j.css';
import '../../css/m/mr42sub6s.css';
import '../../css/g/gyr8ovgjp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="it6ujub8j"/><path class="mr42sub6s"/><path class="gyr8ovgjp"/></g>`,
		"fallback": "iconaut:user-arrow-left",
	});
}

export default Component;
