import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yxx-bo3lp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yxx-bo3lp"/>`,
		"fallback": "thesvg-color:laragon",
	});
}

export default Component;
