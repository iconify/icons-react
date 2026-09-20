import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x4kqi0kkj.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x4kqi0kkj"/>`,
		"fallback": "roentgen:two-beds",
	});
}

export default Component;
