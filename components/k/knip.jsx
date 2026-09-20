import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xzlj61byn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xzlj61byn"/>`,
		"fallback": "thesvg-color:knip",
	});
}

export default Component;
