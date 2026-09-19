import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c6xu7ib6r.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c6xu7ib6r"/>`,
		"fallback": "ant-design:printer-outlined",
	});
}

export default Component;
