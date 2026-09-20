import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dz2-91bzu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="dz2-91bzu"/>`,
		"fallback": "token:optimism",
	});
}

export default Component;
