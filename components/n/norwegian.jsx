import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y6pc9-_jx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="y6pc9-_jx"/>`,
		"fallback": "thesvg-color:norwegian",
	});
}

export default Component;
