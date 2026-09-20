import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/in9d5ac6n.css';
import '../../css/s/s4v7vibmb.css';
import '../../css/p/pkqrh8car.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="in9d5ac6n"><path class="s4v7vibmb"/><path class="pkqrh8car"/></g>`,
		"fallback": "streamline-plump-color:moustache",
	});
}

export default Component;
