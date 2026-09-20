import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uorq20b8q.css';

const viewBox = {"width":30,"height":30};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uorq20b8q"/>`,
		"fallback": "wi:owm-night-741",
	});
}

export default Component;
