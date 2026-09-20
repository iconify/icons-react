import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rthg1qbbx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="rthg1qbbx"/>`,
		"fallback": "token:m87",
	});
}

export default Component;
