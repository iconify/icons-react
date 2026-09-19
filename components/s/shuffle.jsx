import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d3mw5zbrj.css';
import '../../css/l/lf7w2ibjf.css';

const viewBox = {"width":100,"height":100};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="d3mw5zbrj"/><path class="lf7w2ibjf"/>`,
		"fallback": "foundation:shuffle",
	});
}

export default Component;
