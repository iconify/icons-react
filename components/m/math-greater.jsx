import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ywy6t0bxf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ywy6t0bxf"/>`,
		"fallback": "tabler:math-greater",
	});
}

export default Component;
