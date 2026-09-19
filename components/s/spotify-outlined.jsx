import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pk5wt0bov.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pk5wt0bov"/>`,
		"fallback": "ant-design:spotify-outlined",
	});
}

export default Component;
