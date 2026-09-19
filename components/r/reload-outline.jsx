import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qsr228ivf.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qsr228ivf"/>`,
		"fallback": "ant-design:reload-outline",
	});
}

export default Component;
