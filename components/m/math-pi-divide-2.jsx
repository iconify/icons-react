import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r86_r3bnj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r86_r3bnj"/>`,
		"fallback": "tabler:math-pi-divide-2",
	});
}

export default Component;
