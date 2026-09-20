import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j4ihiqo8l.css';
import '../../css/f/fbuv3ib1d.css';
import '../../css/i/i81jb4lpb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j4ihiqo8l"/><path class="fbuv3ib1d"/><path class="i81jb4lpb"/>`,
		"fallback": "prime:prime",
	});
}

export default Component;
