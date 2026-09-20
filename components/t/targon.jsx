import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tgx5q2o1q.css';

const viewBox = {"width":25,"height":25};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="tgx5q2o1q"/>`,
		"fallback": "thesvg:targon",
	});
}

export default Component;
