import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y1wq2lbyq.css';
import '../../css/x/xwnryb42j.css';
import '../../css/s/sh--qnbyj.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="y1wq2lbyq"/><path class="xwnryb42j"/><path class="sh--qnbyj"/>`,
		"fallback": "thesvg-color:oauth",
	});
}

export default Component;
