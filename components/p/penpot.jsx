import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hqdd3lnje.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hqdd3lnje"/>`,
		"fallback": "simple-icons:penpot",
	});
}

export default Component;
