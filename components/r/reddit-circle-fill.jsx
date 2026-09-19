import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s-2gk41ln.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s-2gk41ln"/>`,
		"fallback": "ant-design:reddit-circle-fill",
	});
}

export default Component;
