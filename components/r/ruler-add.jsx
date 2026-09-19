import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gwh8l9bwi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gwh8l9bwi"/>`,
		"fallback": "iconoir:ruler-add",
	});
}

export default Component;
