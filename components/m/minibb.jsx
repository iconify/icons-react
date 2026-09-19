import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/ry_3st_jz.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ry_3st_jz"/>`,
		"fallback": "whh:minibb",
	});
}

export default Component;
