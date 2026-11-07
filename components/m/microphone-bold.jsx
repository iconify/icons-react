import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/si6y8idcw.css';
import '../../css/w/w8iuawbsc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="si6y8idcw"/><path clip-rule="evenodd" class="w8iuawbsc"/>`,
		"fallback": "solar:microphone-bold",
	});
}

export default Component;
