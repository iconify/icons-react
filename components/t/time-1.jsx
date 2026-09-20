import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lqepb6b9s.css';

const viewBox = {"width":30,"height":30};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lqepb6b9s"/>`,
		"fallback": "wi:time-1",
	});
}

export default Component;
