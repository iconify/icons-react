import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/ts2nofb2d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ts2nofb2d"/>`,
		"fallback": "cbi:mi-bedside-lamp2",
	});
}

export default Component;
