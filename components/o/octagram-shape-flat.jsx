import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ynvpeikbh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ynvpeikbh"/>`,
		"fallback": "streamline-sharp-color:octagram-shape-flat",
	});
}

export default Component;
