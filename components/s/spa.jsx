import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f41sj1dgi.css';
import '../../css/o/o9f842q3i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f41sj1dgi"/><path class="o9f842q3i"/>`,
		"fallback": "bxs:spa",
	});
}

export default Component;
