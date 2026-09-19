import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o7kj4tflr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="o7kj4tflr"/>`,
		"fallback": "hugeicons:tornado-02",
	});
}

export default Component;
