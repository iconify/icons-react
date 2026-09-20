import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ot0ib_b5q.css';

const viewBox = {"width":11,"height":11};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ot0ib_b5q"/>`,
		"fallback": "maki:volleyball-11",
	});
}

export default Component;
