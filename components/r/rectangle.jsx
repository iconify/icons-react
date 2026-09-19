import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dssr3rb_e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dssr3rb_e"/>`,
		"fallback": "bx:rectangle",
	});
}

export default Component;
