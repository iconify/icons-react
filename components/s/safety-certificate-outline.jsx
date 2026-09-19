import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hi33acb7x.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hi33acb7x"/>`,
		"fallback": "ant-design:safety-certificate-outline",
	});
}

export default Component;
