import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l8u1fd4tr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l8u1fd4tr"/>`,
		"fallback": "mdi:transfer-left",
	});
}

export default Component;
