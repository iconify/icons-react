import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j_53k1-ec.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="j_53k1-ec"/>`,
		"fallback": "iconoir:quote-solid",
	});
}

export default Component;
