import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zord_3zoe.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zord_3zoe"/>`,
		"fallback": "thesvg-color:moodle",
	});
}

export default Component;
