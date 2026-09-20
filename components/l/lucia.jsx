import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sz4p5n3yx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sz4p5n3yx"/>`,
		"fallback": "thesvg:lucia",
	});
}

export default Component;
