import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tjh50pbdb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tjh50pbdb"/>`,
		"fallback": "mingcute:pingpong-line",
	});
}

export default Component;
