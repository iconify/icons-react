import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ic8wy5bhj.css';

const viewBox = {"width":30,"height":30};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ic8wy5bhj"/>`,
		"fallback": "wi:moon-7",
	});
}

export default Component;
