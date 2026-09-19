import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jdmuq9b0t.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jdmuq9b0t"/>`,
		"fallback": "ant-design:picture",
	});
}

export default Component;
