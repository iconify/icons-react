import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b-u-z0bcd.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b-u-z0bcd"/>`,
		"fallback": "ant-design:safety-certificate-fill",
	});
}

export default Component;
