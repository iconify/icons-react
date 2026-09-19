import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pi4rw9ffy.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pi4rw9ffy"/>`,
		"fallback": "ant-design:sliders-filled",
	});
}

export default Component;
