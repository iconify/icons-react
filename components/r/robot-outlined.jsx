import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hx6o3lh-f.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hx6o3lh-f"/>`,
		"fallback": "ant-design:robot-outlined",
	});
}

export default Component;
