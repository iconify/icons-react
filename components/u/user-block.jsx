import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vt3bd-w9z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="vt3bd-w9z"/>`,
		"fallback": "reicon:user-block",
	});
}

export default Component;
