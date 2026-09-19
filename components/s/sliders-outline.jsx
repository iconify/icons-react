import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x9apc6bdn.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x9apc6bdn"/>`,
		"fallback": "ant-design:sliders-outline",
	});
}

export default Component;
