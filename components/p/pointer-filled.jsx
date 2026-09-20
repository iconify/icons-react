import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gl_x3gf9g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gl_x3gf9g"/>`,
		"fallback": "reicon:pointer-filled",
	});
}

export default Component;
