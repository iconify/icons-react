import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hn8lobeas.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hn8lobeas"/>`,
		"fallback": "ant-design:solution-outline",
	});
}

export default Component;
