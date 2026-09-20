import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ea8f0gb4l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ea8f0gb4l"/>`,
		"fallback": "thesvg-color:smoothcomp",
	});
}

export default Component;
