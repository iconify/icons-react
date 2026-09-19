import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x9hnr1bvi.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x9hnr1bvi"/>`,
		"fallback": "ant-design:rise-outlined",
	});
}

export default Component;
