import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dun5x8ubx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dun5x8ubx"/>`,
		"fallback": "mdi:table-cancel",
	});
}

export default Component;
