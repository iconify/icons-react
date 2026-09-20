import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hr3af1bbx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="hr3af1bbx"/>`,
		"fallback": "token:torn",
	});
}

export default Component;
