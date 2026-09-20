import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrhf55bxf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nrhf55bxf"/>`,
		"fallback": "pixel:trash-alt-solid",
	});
}

export default Component;
