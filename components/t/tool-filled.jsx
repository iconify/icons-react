import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k3_xg8bmi.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k3_xg8bmi"/>`,
		"fallback": "ant-design:tool-filled",
	});
}

export default Component;
