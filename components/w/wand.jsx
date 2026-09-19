import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r39id2hno.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r39id2hno"/>`,
		"fallback": "hugeicons:wand",
	});
}

export default Component;
