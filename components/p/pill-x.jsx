import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zo4gjv_kt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zo4gjv_kt"/>`,
		"fallback": "noviair-light:pill-x",
	});
}

export default Component;
