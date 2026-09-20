import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q73kw6bhz.css';

const viewBox = {"width":22,"height":22};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q73kw6bhz"/>`,
		"fallback": "memory:time-sand",
	});
}

export default Component;
