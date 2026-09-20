import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bw-ztc7eo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bw-ztc7eo"/>`,
		"fallback": "reicon:receipt2-filled",
	});
}

export default Component;
