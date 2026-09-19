import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tabi2-kal.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tabi2-kal"/>`,
		"fallback": "iconamoon:link-thin",
	});
}

export default Component;
